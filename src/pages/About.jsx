import React, { Fragment, useEffect, useRef, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import CountUp from 'react-countup';

function About() {

    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setStartCount(true);
                observer.disconnect();
            }
        },
        { threshold: 0.3 });

        if(counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if(counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        }
    }, []);

    return (
        <>
            {/* Breadcrumb area start */}
            <Breadcrumbs page="About" title="Mini's About" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* About section start */}
                <div className="theme-section white-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h3 className="area-title">About Us</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime temporibus accusamus quisquam deserunt consequuntur sapiente tenetur explicabo possimus ex quae, corporis ratione id saepe rem. <strong>we are </strong>. . .</p>
                                    <div className="about-block-icons">
                                        <div className="single-block-option">
                                            <i className="bi bi-layer"></i>
                                            <p>Hard Worker</p>
                                        </div>
                                        <div className="single-block-option">
                                            <i className="bi bi-bulb"></i>
                                            <p>Creative</p>
                                        </div>
                                        <div className="single-block-option">
                                            <i className="bi bi-office-bag"></i>
                                            <p>Professional</p>
                                        </div>
                                    </div>
                                    <ul className="social-menu">
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                    </ul>
                                    <a href="#" className="button btn-white-top btn-white-bg">Contact Us</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h4>our working ability</h4>
                                    <p>We area expert in lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati hic deleniti similique, labore, atque possimus.</p>
                                    <div className="progress-bar-area">
                                        <div className="single-skill-bar">
                                            <p>design</p>
                                            <div className="progress wow fadeInLeft">
                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: '92%' }}>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill-bar">
                                            <p>development</p>
                                            <div className="progress wow fadeInLeft">
                                                <div className="progress-bar  wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".4s" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill-bar">
                                            <p>Game</p>
                                            <div className="progress wow fadeInLeft">
                                                <div className="progress-bar  wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".5s" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill-bar">
                                            <p>Robotics</p>
                                            <div className="progress wow fadeInLeft">
                                                <div className="progress-bar  wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".6s" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                                                    <span>85%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About section end */}

                {/* Counter section start */}
                <div ref={counterRef} className="theme-section-2 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg">
                                <div className="single-counter">
                                    <div className="counter-inner">
                                        <i className="bi bi-drawer"></i>
                                        <p className="counter">
                                            <CountUp start={0} end={100} duration={5} />
                                        </p>
                                        <h4>Complete Projects</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="single-counter">
                                    <div className="counter-inner">
                                        <i className="bi bi-emo-smile"></i>
                                        <p className="counter">
                                            <CountUp start={0} end={100} duration={5} />
                                        </p>
                                        <h4>Happy Clients</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="single-counter">
                                    <div className="counter-inner">
                                        <i className="bi bi-madel"></i>
                                        <p className="counter">
                                            <CountUp start={0} end={100} duration={5} />
                                        </p>
                                        <h4>honored</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="single-counter">
                                    <div className="counter-inner">
                                        <i className="bi bi-cup-coffee"></i>
                                        <p className="counter">
                                            <CountUp start={0} end={100} duration={5} />
                                        </p>
                                        <h4>Working Hours</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter section end */}

                {/* Team section start */}
                <div className="theme-section white-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="area-heading">
                                    <h2 className="area-title">My Team</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member wow fadeIn" data-wow-delay=".2s">
                                    <div className="member-img">
                                        <img src="assets/img/team/1.jpg" alt="" />
                                        <ul className="social-menu">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="member-content text-center">
                                        <h4>john doe</h4>
                                        <p>CEO & Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member wow fadeIn" data-wow-delay=".4s">
                                    <div className="member-img">
                                        <img src="assets/img/team/2.jpg" alt="" />
                                        <ul className="social-menu">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="member-content text-center">
                                        <h4>Adam Smith</h4>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member wow fadeIn" data-wow-delay=".6s">
                                    <div className="member-img">
                                        <img src="assets/img/team/3.jpg" alt="" />
                                        <ul className="social-menu">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="member-content text-center">
                                        <h4>Carol Ferris</h4>
                                        <p>Programmer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member wow fadeIn" data-wow-delay=".8s">
                                    <div className="member-img">
                                        <img src="assets/img/team/4.jpg" alt="" />
                                        <ul className="social-menu">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="member-content text-center">
                                        <h4>john doe</h4>
                                        <p>Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team section end */}
            </section>
            {/* Page content area end */}

        </>
    )
}

export default About