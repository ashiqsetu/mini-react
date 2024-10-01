import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useParams, useLocation } from 'react-router-dom'
import BlogSidebar from '../components/blogs/BlogSidebar';
import PostDetailsContent from '../components/blogs/PostDetailsContent';
import PageTitle from '../components/common/PageTitle';

function SinglePost() {

    // const { id } = useParams();
    const { state } = useLocation();

    // Post Sidebar Options
    const sidebars = {
        left: true,
        right: false,
        postDetails: true
    };

    return (
        <>
            {/* Page title */}
            <PageTitle title={`Mini | ${state.title}`}/>

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Single Post" title="Mini's Single Post" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* Blog section start */}
                <div className="theme-section gray-bg">
                    <div className="container">
                        <div className="row">
                            <BlogSidebar leftSidebarStatus={sidebars.left} rightSidebarStatus={sidebars.right} postDetails={sidebars.postDetails} />
                            <PostDetailsContent state={state} fullWidth={!sidebars.left && !sidebars.right} />
                        </div>
                    </div>
                </div>
                {/* Blog section end */}
            </section >
            {/* Page content area end */}
        </>
    )
}

export default SinglePost