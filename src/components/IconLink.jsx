import React from 'react';
import { Link } from 'react-router-dom';

export default function IconLink({
    to,
    className,
    children,
    icon,
    icon_first,
}) {
    const content = icon_first ? (
        <>
            {icon}
            {children}
        </>
    ) : (
        <>
            {children}
            {icon}
        </>
    );
    return (
        <Link className={`arrow-link ${className}`} to={to}>
            {content}
        </Link>
    );
}
