import React, { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useParams, useLocation } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

function SinglePortfolio() {

    const { id } = useParams();
    const { state } = useLocation();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            {/* Breadcrumb area start */}
            <Breadcrumbs page="Single Project" title="Mini's Single Project" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* Blog section start */}
                <div className="theme-section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="portfolio-thumbnail-wrapper">
                                    <Carousel activeIndex={index} onSelect={handleSelect} fade>
                                        <Carousel.Item className="single-project-thumb">
                                            <img className="img-responsive" src="/assets/img/portfolio/single-portfolio/1.jpg" alt="" />
                                            <Carousel.Caption>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item className="single-project-thumb">
                                            <img className="img-responsive" src="/assets/img/portfolio/single-portfolio/2.jpg" alt="" />
                                            <Carousel.Caption>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item className="single-project-thumb">
                                            <img className="img-responsive" src="/assets/img/portfolio/single-portfolio/3.jpg" alt="" />
                                            <Carousel.Caption>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="project-meta-wrapper">
                                    <h4>information</h4>
                                    <ul className="single-project-meta">
                                        <li>
                                            <i className="ti ti-user"></i><span>Client:</span>John Doe
                                        </li>
                                        <li>
                                            <i className="ti ti-calendar"></i><span>Date:</span>13 May 2018
                                        </li>
                                        <li>
                                            <i className="ti-layers"></i><span>Skills:</span>game + robotics
                                        </li>
                                        <li>
                                            <i className="ti-link"></i><span>Demo: </span><a href="#">Site Link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="single-project-description">
                                    <h2 className="single-project-title">{state.title}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis, laborum distinctio. Cupiditate sunt nesciunt ipsa, sequi mollitia, officiis dicta odit omnis assumenda similique, qui doloribus! Iste aspernatur nihil placeat cumque laboriosam odio, accusantium quidem praesentium vel, iure illo ratione quibusdam nulla sint repellendus, dolore voluptatibus! Assumenda asperiores recusandae accusamus.</p>
                                    <ul className="post-object-list">
                                        <li>Stay Hungry, Stay Foolish.</li>
                                        <li>I am trying to find myself. Sometimes that's not easy</li>
                                        <li>Life isn't about finding yourself, Life is about creating yourself.</li>
                                        <li>If you don’t ask, You won’t get.</li>
                                        <li>Be great, Be bold, Be grand.</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni amet similique. Cum explicabo inventore id nesciunt quidem, laudantium minus tempore error repellendus magni, voluptatibus dignissimos eum consectetur at minima quam nam maiores perferendis suscipit maxime delectus dolorum deserunt repellat nostrum repudiandae. Deserunt dolor a, harum odio excepturi architecto, consectetur!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates possimus impedit laboriosam, amet ullam nisi doloribus facilis sunt. Quod expedita impedit ipsum atque beatae reprehenderit unde eos doloremque asperiores ratione. Incidunt voluptatum voluptatem nemo quia animi odit, reiciendis assumenda culpa.</p>
                                    <blockquote className="blockquote">
                                        <p>"We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better."</p>
                                        <span>~J.K. Rowling</span>
                                    </blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rerum, ullam minus explicabo aliquam sunt eaque, natus, dolores numquam eius commodi, unde vitae suscipit quasi?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus facere, consequuntur. Aliquam, facere culpa illum repellendus adipisci reiciendis, ad? Nihil eius earum nostrum nobis fugiat distinctio praesentium veniam labore porro!</p>
                                    <blockquote className="blockquote">
                                        <p>Empathy is a choice, and it's a vulnerable choice. Because in order to connect with you, I have to connect with something in myself that knows that feeling. "</p>
                                        <span>~Brené Brown</span>
                                    </blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis, laborum distinctio. Cupiditate sunt nesciunt ipsa, sequi mollitia, officiis dicta odit omnis assumenda similique, qui doloribus! Iste aspernatur nihil placeat cumque laboriosam odio, accusantium quidem praesentium vel, iure illo ratione quibusdam nulla sint repellendus, dolore voluptatibus! Assumenda asperiores recusandae accusamus.</p>
                                </div>
                                <div className="single-project-link">
                                    <a href="#" className="project-link prev-project"><i className="fa fa-angle-left"></i>previous project</a>
                                    <a href="#" className="project-link next-project">next project<i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog section end */}
            </section>
            {/* Page content area end */}

        </>
    )
}

export default SinglePortfolio