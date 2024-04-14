import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const navbarRef = useRef(null);
    const navbarTogglerRef = useRef(null);

    useEffect(() => {
        const navbarShrink = () => {
            const navbarCollapsible = navbarRef.current;
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }
        };

        navbarShrink();

        window.addEventListener('scroll', navbarShrink);

        const responsiveNavItems = Array.from(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        const handleNavItemClick = (event) => {
            const navbarToggler = navbarTogglerRef.current;
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        };
        responsiveNavItems.forEach((responsiveNavItem) => {
            responsiveNavItem.addEventListener('click', handleNavItemClick);
        });

        return () => {
            window.removeEventListener('scroll', navbarShrink);
            responsiveNavItems.forEach((responsiveNavItem) => {
                responsiveNavItem.removeEventListener('click', handleNavItemClick);
            });
        };
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" ref={navbarRef}>
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">
                        <img src="./src/assets/logof.png"/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        ref={navbarTogglerRef}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Men">
                                    Men
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Women">
                                    Women
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Kids">
                                    Kids
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/history">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/News">
                                    News
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/TablaCrear" style={{ fontSize: '32px', lineHeight: '24px' }}>
                                    +
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Carrito">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/SignInUpForm">
                                    <i className="fas fa-user"></i>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
