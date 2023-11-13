import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import bg from "./Images/loginbg.jpg";

function Login() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        Axios.post("http://localhost:4000/UserRoute/login", {
            loginId: loginId,
            password: password,
        })
        .then((response) => {
            if (response.data.success) {
                alert("Login Successful!");
                <Link></Link>
            } else {
                alert("Invalid Login Credentials");
            }
        })
        .catch((error) => {
            console.error("Login Failed", error);
        });
    };

    return (
        <div className="containerStyle">
            <form className="form" style={{ position: "static", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <div className="mx-auto" style={{ marginLeft: "140px", height: "40%", width: "30%" }}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Login Id :</label></td>
                                <td><input className="form-control" style={{ width: "100%" }} type="text" onChange={(event) => setLoginId(event.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label>Password :</label></td>
                                <td><input className="form-control" style={{ width: "100%" }} type="password" onChange={(event) => setPassword(event.target.value)} /></td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: "center" }}>
                                    <button className="btn btn-primary mt-3" type="button" onClick={handleLogin}>Login</button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="mt-3 justify-content-end" style={{ display: "flex" }}>
                                    <label>New User ?</label><Link to="/register" className="nav-link text-primary">Register</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default Login;
