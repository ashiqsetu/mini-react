import React, { Fragment } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

function Service() {
  return (
    <>
        {/* Breadcrumb area start */}
        <Breadcrumbs page="Service" title="Mini's Services" />
        {/* Breadcrumb area end */}

        {/* Page content area start */}
            <section className="content">
                {/* Service section start */}
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
                                <div className="single-service wow fadeIn" data-wow-delay=".2s">
                                    <div className="service-header">
                                        <i className="bi bi-code"></i>
                                        <h3>Design</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, recusandae.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-service wow fadeIn" data-wow-delay=".4s">
                                    <div className="service-header">
                                        <i className="bi bi-laptop"></i>
                                        <h3>Development</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fugiat.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-service wow fadeIn" data-wow-delay=".6s">
                                    <div className="service-header">
                                        <i className="bi bi-layer"></i>
                                        <h3>Branding</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, architecto.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-service wow fadeIn" data-wow-delay=".8s">
                                    <div className="service-header">
                                        <i className="bi bi-mobile"></i>
                                        <h3>Apps</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, corrupti!</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-service wow fadeIn" data-wow-delay="1s">
                                    <div className="service-header">
                                        <i className="bi bi-office-bag"></i>
                                        <h3>Marketing</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quaerat?</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-service wow fadeIn" data-wow-delay="1.2s">
                                    <div className="service-header">
                                        <i className="bi bi-support"></i>
                                        <h3>support</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.</p>
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