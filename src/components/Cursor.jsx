import React, { useRef } from 'react';

export default function Cursor() {
    // This component is unused at the moment
    const cursor = useRef(null);
    const changePosition = () => {};

    return <div id="Cursor" ref={cursor} onMouseMove={changePosition}></div>;
}
