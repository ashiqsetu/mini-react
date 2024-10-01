import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Portfolio from '../components/portfolios/Portfolio';
import PageTitle from '../components/common/PageTitle';

function Portfolios() {

    return (
        <>
            {/* Page title */}
            <PageTitle title='Mini | Portfolios'/>

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Portfolios" title="Mini's Portfolios" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* Portfolio section start */}
                <Portfolio />
                {/* Portfolio section end */}
            </section>
            {/* Page content area end */}
        </>
    )
}

export default Portfolios