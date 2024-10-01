import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageTitle from '../components/common/PageTitle';

function Contact() {
    return (
        <>
            {/* Page title */}
            <PageTitle title='Mini | Contact'/>

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Contact" title="Mini's Contact" />

            {/* Page content area start */}
            <section className="content">
                {/* Contact section start */}
                <div className="contact-section">
                    <div id="contact" className="contact-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="single-address-content">
                                        <i className="bi bi-map-pointer"></i>
                                        <h5>address</h5>
                                        <p>1 Hacker Way, Menlo Park,
                                            <br />California, United States</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-address-content">
                                        <i className="bi bi-phone"></i>
                                        <h5>phone</h5>
                                        <p>+8 125 254 222</p>
                                        <p>+8 125 254 333</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-address-content">
                                        <i className="bi bi-envelop"></i>
                                        <h5>email</h5>
                                        <ul className="mail-address">
                                            <li><a href="mailto:company.oxygens@gmail.com">company.oxygens@gmail.com</a></li>
                                            <li><a href="mailto:company.oxygens@gmail.com">company.oxygens@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-message">
                                        <form id="mini-contact-form" action="" method="POST" className="contact-form">
                                            <div className="form-head fix">
                                                <div className="single-message-content">
                                                    <input type="text" name="name" className="text-field" placeholder="Name" required />
                                                </div>
                                                <div className="single-message-content">
                                                    <input type="email" name="mail" className="text-field" placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div className="form-head fix">
                                                <div className="single-message-content">
                                                    <input type="text" name="subject" className="text-field" placeholder="Subject" required />
                                                </div>
                                                <div className="single-message-content">
                                                    <input type="tel" name="phone" className="text-field" placeholder="Phone" required />
                                                </div>
                                            </div>
                                            <div className="form-body">
                                                <textarea name="message" className="text-field" placeholder="Message" required></textarea>
                                            </div>
                                            <button type="submit" className="button btn-white-left btn-white-bg">Send Message</button>
                                        </form>
                                        <p className="mini-send-message"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mini-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9915616474846!2d-122.14786289999998!3d37.484525500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbd49651e922b%3A0x3c9b34a93a13c273!2s1%20Hacker%20Wy%2C%20Menlo%20Park%2C%20CA%2094025%2C%20USA!5e0!3m2!1sen!2sbd!4v1727588894026!5m2!1sen!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                {/* Contact section end */}
            </section>
            {/* Page content area end */}

        </>
    )
}

export default Contact