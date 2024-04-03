import React, { useState, useEffect, useRef } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    // Have the nav buttons show active style when the correct section is visible
    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting
                )?.target;

                if (visibleSection) {
                    setActiveSection(visibleSection.id);
                }
            },
            { threshold: 0.5 }
        );

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
            <div className="scroll-tip">
                <span>&lt;&lt;&nbsp;&nbsp;&nbsp;Scroll Down</span>
            </div>
            <ul>
                <li>
                    <a
                        href="#About"
                        className={activeSection === 'About' ? 'active' : ''}
                    >
                        <div className="line"></div>
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
                        <div className="line"></div>
                        Experience
                    </a>
                </li>
                <li>
                    <a
                        href="#Projects"
                        className={activeSection === 'Projects' ? 'active' : ''}
                    >
                        <div className="line"></div>
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#Education"
                        className={
                            activeSection === 'Education' ? 'active' : ''
                        }
                    >
                        <div className="line"></div>
                        Education
                    </a>
                </li>
                <li>
                    <a
                        href="#Interests"
                        className={
                            activeSection === 'Interests' ? 'active' : ''
                        }
                    >
                        <div className="line"></div>
                        Interests
                    </a>
                </li>
            </ul>
        </div>
    );
}
