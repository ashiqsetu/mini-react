import React from 'react'

function BlogSidebar({ leftSidebarStatus, rightSidebarStatus, postDetails, blogs }) {

    let order2 = false;

    if (!leftSidebarStatus && !rightSidebarStatus) {
        return;
    } else if (rightSidebarStatus) {
        order2 = true;
    }

    return (
        <>
            <div className={`col-xl-3 col-lg-4 col-md-5 ${order2 ? 'order-2' : ''}`}>
                {blogs && <aside className="single-widget">
                    <div className="search-widget">
                        <form className="search-form">
                            <input type="text" placeholder="search...." />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </aside>}
                {postDetails && <aside className="single-widget">
                    <h4 className="widget-title">About author</h4>
                    <div className="widget-content">
                        <div className="author-thumbnail">
                            <img src="/assets/img/avatars/author.jpg" alt="" />
                        </div>
                        <div className="author-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet suscipit voluptatum, quis labore amet laborum sequi nisi, odio ipsum molestias.</p>
                            <ul className="social-menu">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>}
                <aside className="single-widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="post-cat-list">
                        <li><a href="#">design <span>[9]</span></a></li>
                        <li><a href="#">animation <span>[5]</span></a></li>
                        <li><a href="#">game <span>[7]</span></a></li>
                        <li><a href="#">robotics <span>[6]</span></a></li>
                    </ul>
                </aside>
                <aside className="single-widget">
                    <h4 className="widget-title">Tags</h4>
                    <div className="tags">
                        <a href="#">design</a>
                        <a href="#">template</a>
                        <a href="#">theme-forest</a>
                        <a href="#">game</a>
                        <a href="#">art</a>
                        <a href="#">robotics</a>
                    </div>
                </aside>
                <aside className="single-widget">
                    <h4 className="widget-title">Recent Posts</h4>
                    <div className="recent-post-widget">
                        <div className="single-post-widget">
                            <a href="#"><img src="/assets/img/blog/widget/1.jpg" alt="" /></a>
                            <div className="post-widget-content">
                                <h5><a href="#">simple post title</a></h5>
                                <p>Category: <a href='#'>Design</a></p>
                            </div>
                        </div>
                        <div className="single-post-widget">
                            <a href="#"><img src="/assets/img/blog/widget/1.jpg" alt="" /></a>
                            <div className="post-widget-content">
                                <h5><a href="#">simple post title</a></h5>
                                <p>Category: <a href='#'>Design</a></p>
                            </div>
                        </div>
                        <div className="single-post-widget">
                            <a href="#"><img src="/assets/img/blog/widget/1.jpg" alt="" /></a>
                            <div className="post-widget-content">
                                <h5><a href="#">simple post title</a></h5>
                                <p>Category: <a href='#'>Design</a></p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default BlogSidebar