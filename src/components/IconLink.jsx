import React from 'react';
import { Link } from 'react-router-dom';

export default function IconLink({
    to,
    className,
    children,
    icon,
    icon_first,
    external,
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
    if (external) {
        return (
            <a href={to} target="_blank" className={`arrow-link ${className}`}>
                {content}
            </a>
        );
    } else {
        return (
            <Link className={`arrow-link ${className}`} to={to}>
                {content}
            </Link>
        );
    }
}
