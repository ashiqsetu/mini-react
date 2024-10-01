import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Footer({targetRef}) {

    const [backToTop, setBackToTop] = useState(false);

    const handleScroll = () => {
        const windowSize = window.innerWidth;
        let toTopBtn = document.querySelector('.to-top-btn');

        if(windowSize > 1 && window.scrollY > 1) {
            setBackToTop(true);
            if(toTopBtn) {
                setTimeout(() => {
                    toTopBtn.classList.add('topTransition');
                }, 300);
            }
            
        } else {
            if(toTopBtn) {
                toTopBtn.classList.remove('topTransition');
                toTopBtn.classList.add('removeTransition');
            }
            setTimeout(() => {
                setBackToTop(false);
            }, 200);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const scrollHeader = () => {
        const headerHeight = targetRef.current?.offsetHeight || 0;
        window.scrollTo({
            top: targetRef.current?.offsetTop - headerHeight,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <footer className="theme-footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 col-md-12 order-md-2">
                            <div className="copy-right-info">
                                <p>All rights reserved &copy; <a href="https://themeforest.net/user/oxygens/portfolio" target="_blank">oxygens</a>, 2024</p>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-2 col-md-7 order-md-1">
                            <div className="footer-single-widget">
                                <ul className="quick-link">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/services">services</Link></li>
                                    <li><Link to="/portfolios">portfolios</Link></li>
                                    <li><Link to="/blogs">blogs</Link></li>
                                    <li><Link to="/contact">contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-5 order-md-1">
                            <div className="footer-single-widget">
                                <ul className="social-menu">
                                    <li><a title="facebook" href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-facebook"></i></a></li>
                                    <li><a title="twitter" href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-twitter"></i></a></li>
                                    <li><a title="instagram" href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-instagram"></i></a></li>
                                    <li><a title="linkedin" href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {
                backToTop && (
                    <button onClick={() => scrollHeader()} className="to-top-btn to-top-show"><i className="fa fa-angle-up"></i></button>
                )
            }
        </>
    )
}

export default Footer