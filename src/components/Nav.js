import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav className="navbar" style={{backgroundColor:"#ffdbdc"}}>
            <Link style={{fontFamily:"sans-serif",fontWeight:"bold"}} className="navbar-brand mx-3"><i class="fa-solid fa-paw text-danger"></i> Love And Tender Pet Care</Link>
            <div className="nav">
                <Link to="/home" className="nav-link text-dark">Home</Link>
                <Link to="/Contact-us" className="nav-link text-dark">Contact Us</Link>
                <Link to="/login" className="nav-link text-dark">Login/Register</Link>
            </div>
        </nav>
    )
}

export default Nav;