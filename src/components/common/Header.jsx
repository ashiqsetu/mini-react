import { useState, useEffect } from "react";
import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Header({ targetRef }) {

    const [show, sidebarVisibility] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState(false);
    const [hideSidebar, setHideSidebar] = useState(false);

    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const [isSticky, setSticky] = useState(false);

    const location = useLocation();


    const showSidebar = () => {
        sidebarVisibility(true);
        setTimeout(() => {
            setActiveSidebar(true);
        }, 700)
    }

    const hiddenSidebar = () => {
        setActiveSidebar(false);
        setTimeout(() => {
            setHideSidebar(true);
        }, 1000)
        setTimeout(() => {
            setHideSidebar(false);
            sidebarVisibility(false);
        }, 2000)
    }

    const handleScroll = () => {
        const windowSize = window.innerWidth;

        if (windowSize > 1 && window.scrollY > 1) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        sidebarVisibility(false);
    }, [location]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const toggleSubMenu = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    }

    return (
        <>
            {/* Header area start  */}
            <header ref={targetRef} className={`sticky-header header-area header-bg ${isSticky ? 'is_sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav id="ss" className="navbar navbar-expand-md navbar-light">
                                <div className="logo">
                                    <Link to='/' className="navbar-brand">
                                        mini<span className="dot-color">.</span>
                                    </Link>
                                </div>
                                <div className="menu-bar">
                                    <div className="expand-menu-bar" onClick={() => showSidebar()}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header area end  */}

            {/* Slide menu start */}
            <section className={`main-menu-expand ${show ? 'slide_right' : ''} ${activeSidebar ? 'slide_done' : ''} ${hideSidebar ? 'slide_hide' : ''}`}>
                <div className="expand-header">
                    <div className="menu-logo">
                        <Link className="navbar-brand" href="/">mini<span className="dot-color">.</span></Link>
                    </div>
                    <div className="close-icon" onClick={() => hiddenSidebar()}>
                        <i className="bi bi-cross-gap"></i>
                    </div>
                </div>
                <ul className="main-menu">
                    <li className={`sub-item ${activeSubMenu === 1 ? 'open' : ''}`}>
                        <button onClick={() => toggleSubMenu(1)}>Home</button>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/index-2'>Home 2</Link></li>
                            <li><Link to='/index-3'>Home 3</Link></li>
                            <li><Link to='/index-4'>Home 4</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Service</Link></li>
                    <li className={`sub-item ${activeSubMenu === 2 ? 'open' : ''}`}>
                        <button onClick={() => toggleSubMenu(2)}>Portfolio</button>
                        <ul>
                            <li><Link to='/portfolio'>Portfolio</Link> </li>
                            <li><Link to='/single-portfolio'>Single Project</Link> </li>
                        </ul>
                    </li>
                    <li className={`sub-item ${activeSubMenu === 3 ? 'open' : ''}`}>
                        <button onClick={() => toggleSubMenu(3)}>Blog</button>
                        <ul>
                            <li><Link to='/blogs'>Blog</Link> </li>
                            <li><Link to='/single-post'>Single Post</Link> </li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="social-menu">
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-linkedin"></i></a></li>
                </ul>
                <div className="copy-right-info text-center">
                    <p>All rights reserved &copy; <a href="https://themeforest.net/user/oxygens/portfolio" target="_blank">oxygens</a>, 2018</p>
                </div>
            </section>
            {/* Slide menu end */}
        </>
    )
}

export default Header