import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <section className="notFoundSection">
        <div className="container">
          <div className="notFoundContent">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Return Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound