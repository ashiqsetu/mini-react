import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Portfolio from '../components/portfolios/Portfolio';

function Portfolios() {

    return (
        <>
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