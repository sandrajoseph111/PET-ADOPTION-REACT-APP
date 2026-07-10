import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          background: "linear-gradient(to right, #FFD6E8, #E0BBFF, #CDEFFF)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
        }}
      >
        <div className="container-fluid">

          <Link
            className="navbar-brand fw-bold fs-3"
            to="/"
            style={{ color: "#6A0572" }}
          >
            🐶🐱 Pet Adoption
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <Link className="nav-link fw-semibold px-3" style={{ color: "#6A0572" }} to="/">
                🐾 Add Pet
              </Link>

              <Link className="nav-link fw-semibold px-3" style={{ color: "#6A0572" }} to="/de">
                🗑️ Delete
              </Link>

              <Link className="nav-link fw-semibold px-3" style={{ color: "#6A0572" }} to="/se">
                🔍 Search
              </Link>

              <Link className="nav-link fw-semibold px-3" style={{ color: "#6A0572" }} to="/vi">
                ❤️ View Pets
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavigationBar