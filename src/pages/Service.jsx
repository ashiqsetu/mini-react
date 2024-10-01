import React, { Fragment } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageTitle from '../components/common/PageTitle';

function Service() {
    return (
        <>
            {/* Page title */}
            <PageTitle title='Mini | Service' />

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Service" title="Mini's Services" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">

                {/* Feature section start */}
                <div className="theme-section white-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="area-heading">
                                    <h2 className="area-title">what we do</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature appear">
                                    <div className="feature-header">
                                        <i className="bi bi-code"></i>
                                        <h3>Design</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, recusandae.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature appear">
                                    <div className="feature-header">
                                        <i className="bi bi-laptop"></i>
                                        <h3>Development</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugiat.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature appear">
                                    <div className="feature-header">
                                        <i className="bi bi-layer"></i>
                                        <h3>Branding</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, architecto.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature appear">
                                    <div className="feature-header">
                                        <i className="bi bi-mobile"></i>
                                        <h3>Apps</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, corrupti!</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature appear">
                                    <div className="feature-header">
                                        <i className="bi bi-office-bag"></i>
                                        <h3>Marketing</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quaerat?</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-feature appear">
                                    <div className="feature-header">
                                        <i className="bi bi-support"></i>
                                        <h3>support</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature section end */}

                {/* Service section start */}
                <div className="theme-section service-section">
                    <div className="container">
                        <div className="area-heading">
                            <h2 className="area-title">what we provide</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                        </div>
                        <div className="services-content">
                            <div className="left-services-options">

                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">Software Development</h4>
                                        <p className="description">Designing and building tailored software solutions to meet the specific needs of
                                            clients. This can include web applications, mobile apps, enterprise software, and more.</p>
                                        <span>01</span>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/service/software-development.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">Mobile App Development</h4>
                                        <p className="description">Creating applications for mobile platforms such as iOS and Android. Services may
                                            include native app development, cross-platform development, and mobile strategy consulting.</p>
                                        <span>02</span>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/service/mobile-application.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">Cloud Service</h4>
                                        <p className="description">Leveraging cloud computing platforms to provide scalable and flexible solutions.
                                            This may include cloud application development, migration, and maintenance.</p>
                                        <span>03</span>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/service/cloud-service.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">Web site development</h4>
                                        <p className="description">Developing websites and web applications using various technologies. This can
                                            range from simple informational websites to complex e-commerce platforms and content management
                                            systems.</p>
                                        <span>04</span>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/service/web-development.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">IOT</h4>
                                        <p className="description">Developing software solutions that connect and control IoT devices, enabling data
                                            exchange and automation in various industries.</p>
                                        <span>05</span>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/service/iot.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">UI/UX</h4>
                                        <p className="description">Creating user-friendly and visually appealing interfaces for software
                                            applications. This includes user experience (UX) research, wireframing, and graphic design.</p>
                                        <span>06</span>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/service/ui-design.png" alt="" />
                                    </div>
                                </div>

                            </div>

                            <div className="services-message-content-wrapper">
                                <div className="services-message-content">
                                    <div className="services-meesage-inner-content">
                                        <h2><span>Services</span> We Provide</h2>
                                    </div>
                                </div>
                                <div className="icon softwareDevelopment">
                                    <img src="/assets/img/service/software-development.png" alt="" />
                                    <img className='arrow' src="/assets/img/service/top-arrow.svg" alt="" />
                                </div>
                                <div className="icon cloudService">
                                    <img src="/assets/img/service/cloud-service.png" alt="" />
                                    <img className='arrow' src="/assets/img/service/middle_arrow.svg" alt="" />
                                </div>
                                <div className="icon iot">
                                    <img src="/assets/img/service/iot.png" alt="" />
                                    <img className='arrow' src="/assets/img/service/bottom-arrow.svg" alt="" />
                                </div>
                                <div className="icon mobileApp">
                                    <img src="/assets/img/service/mobile-application.png" alt="" />
                                    <img className='arrow' src="/assets/img/service/top-arrow.svg" alt="" />
                                </div>
                                <div className="icon webSite">
                                    <img src="/assets/img/service/web-development.png" alt="" />
                                    <img className='arrow' src="/assets/img/service/middle_arrow.svg" alt="" />
                                </div>
                                <div className="icon uiUx">
                                    <img src="/assets/img/service/ui-design.png" alt="" />
                                    <img className='arrow' src="/assets/img/service/bottom-arrow.svg" alt="" />
                                </div>
                            </div>

                            <div className="right-services-options">
                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">Mobile App Development</h4>
                                        <p className="description">Creating applications for mobile platforms such as iOS and Android. Services may
                                            include native app development, cross-platform development, and mobile strategy consulting.</p>
                                        <span>02</span>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">Web site development</h4>
                                        <p className="description">Developing websites and web applications using various technologies. This can
                                            range from simple informational websites to complex e-commerce platforms and content management
                                            systems.</p>
                                        <span>04</span>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <div className="box">
                                        <h4 className="title">UI/UX</h4>
                                        <p className="description">Creating user-friendly and visually appealing interfaces for software
                                            applications. This includes user experience (UX) research, wireframing, and graphic design.</p>
                                        <span>06</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Service section end */}

            </section>
            {/* Page content area end */}
        </>
    )
}

export default Service