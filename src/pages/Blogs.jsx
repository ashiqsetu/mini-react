import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Blog from '../components/blogs/Blog'
import PageTitle from '../components/common/PageTitle';

function Blogs() {
    return (
        <>
            {/* Page title */}
            <PageTitle title='Mini | Blogs'/>

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Blog" title="Mini's Blogs" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* Blog section start */}
                <Blog bgBackground='gray-bg' SectionTitle='All Posts' pagination={true} showAllBtn={false} />
                {/* Blog section end */}
            </section>
            {/* Page content area end */}
        </>
    )
}

export default Blogs