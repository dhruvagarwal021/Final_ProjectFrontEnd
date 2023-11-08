import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "./Images/loginbg.jpg"

function Login() {
    return (
        <div className="containerStyle">
            <form className="form" style={{ position: "static", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <div className="mx-auto" style={{ marginLeft: "140px", height: "40%", width: "30%" }}>
                    <table>
                        <tr>
                            <span><label>Login Id :</label><input className="form-control" style={{ width: "100%" }} type="text"></input></span>
                        </tr>
                        <tr>
                            <span><label>Password :</label><input className="form-control" style={{ width: "100%" }} type="password"></input></span>
                        </tr>
                        <tr>
                            <center>
                                <button className="btn btn-primary mt-3">Login</button>
                            </center>
                        </tr>
                        <tr>
                            <span className="mt-3 justify-content-end" style={{display:"flex"}}><label>New User ?</label><Link to="/register" className="nav-link text-primary">Register</Link></span>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    )
}

export default Login;