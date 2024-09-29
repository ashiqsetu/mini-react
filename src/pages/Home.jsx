import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../components/portfolios/Portfolio';
import Blog from '../components/blogs/Blog'

function Home() {

    return (
        <>
            {/* Slider area start */}
            <section className="slider-area">
                <div className="slider-area-wrapper">
                    <div className="single-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-content-wrapper">
                                        <div className="slider-content">
                                            <p className="greetings">welcome</p>
                                            <h1 className="cd-headline">
                                                we are <span>Mini.</span>
                                            </h1>
                                            <ul className="social-menu">
                                                <li><a title="facebook" href="#" target='_blank'><i className="fa fa-facebook"></i></a></li>
                                                <li><a title="twitter" href="#" target='_blank'><i className="fa fa-twitter"></i></a></li>
                                                <li><a title="instagram" href="#" target='_blank'><i className="fa fa-instagram"></i></a></li>
                                                <li><a title="linkedin" href="#" target='_blank'><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                            <div className="button-group">
                                                <Link to="/about" className="button">About Us</Link>
                                                <Link to="/contact" className="button btn-style-2">Contact Us</Link>
                                            </div>
                                        </div>
                                        <div className="intro-img">
                                            <img src="/assets/img/slider/intro.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Slider area end */}

            {/* Page content area start */}
            <section className="content">

                {/* Portfolio section start */}
                <Portfolio showAll={true} />
                {/* Portfolio section end */}

                {/* Blog section start */}
                <Blog bgBackground='white-bg' SectionTitle='Latest Posts' pagination={false} showAllBtn={true} />
                {/* Blog section end */}

            </section>
            {/* Page content area end */}
        </>

    )
}

export default Home