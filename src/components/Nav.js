import React from "react";
import { Link } from "react-router-dom";

function Nav({isLoggedIn,handleLogout}) {
    return (
        <nav className="navbar" style={{ backgroundColor: "#87CEEB" }}>
            <Link
                style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                className="navbar-brand mx-3"
            >
                <i class="fa-solid fa-paw text-danger"></i> Love And Tender Pet Care
            </Link>
            <div className="nav">
                <Link to="/home" className="nav-link text-dark">
                    Home
                </Link>
                <Link to="/about" className="nav-link text-dark">
                    About Us
                </Link>
                <Link to="/vaccine-data" className="nav-link text-dark">
                   Vaccination-Details
                </Link>
                <Link to="/contactus" className="nav-link text-dark">
                    Contact Us
                </Link>
                {isLoggedIn ? (<Link to="/home" onClick={handleLogout} className="btn btn-link text-dark">Logout</Link>) : (<Link to="/login" className="nav-link text-dark">Login/Register</Link>)}
            </div>
        </nav>
    );
}

export default Nav;
