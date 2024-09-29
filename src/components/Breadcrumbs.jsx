import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs(props) {
  return (
    <>
        {/* Breadcrumb area start */}
        <div className="header-height"></div>
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb-content">
                            <h2 className="breadcrumb-title">{props.title}</h2>
                            <ul className="breadcrumb-cat">
                                <li><Link to="/">Home</Link></li>
                                <li>{props.page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Breadcrumb area end */}
    </>
  )
}

export default Breadcrumbs