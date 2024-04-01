import React, { useState, useEffect, useRef } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    // Have the nav buttons show active style when the correct section is visible
    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find(
                (entry) => entry.isIntersecting
            )?.target;

            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        });

        const sections = document.querySelectorAll('.section');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <div id="Nav">
            <ul>
                <li>
                    <a
                        href="#About"
                        className={activeSection === 'About' ? 'active' : ''}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#Experience"
                        className={
                            activeSection === 'Experience' ? 'active' : ''
                        }
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a
                        href="#Projects"
                        className={activeSection === 'Projects' ? 'active' : ''}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#Resume"
                        className={activeSection === 'Resume' ? 'active' : ''}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}
