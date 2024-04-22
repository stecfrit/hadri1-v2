import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div id="PageNotFound" className="content">
            <h1>404: This page doesn't exist &#x1F643;</h1>
            <h2>
                try <Link to="/">https://hadri1.com/</Link>
            </h2>
        </div>
    );
}
