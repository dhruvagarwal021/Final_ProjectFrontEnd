import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import bg from "./Images/loginbg.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Home2 from "./Home2";

function Login() {
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState("");

    // useEffect(()=>{
    //     console.log("userData:",userData);
    // },[userData])

    const handleLogin = () => {
        Axios.post("http://localhost:4000/UserRoute/login", {
            loginId: loginId,
            password: password,
        })
            .then((response) => {
                if (response.data.success) {
                    setIsLoggedIn(true);
                    setUserData(response.data.user);
                    alert("Login Successful!");
                    // alert(userData);
                    navigate("/home2");
                } else {
                    alert("Invalid Login Credentials");
                }
            })
            .catch((error) => {
                console.error("Login Failed", error);
            });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="containerStyle">
            {isLoggedIn ? (
                <Home2 userData={userData} />
            ) : (
                <form className="form" style={{ position: "static", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                    <div className="mx-auto" style={{ height: "40%", width: "40%" }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label><b>Login Id :</b></label></td>
                                    <td><input className="form-control" style={{ width: "100%" }} type="text" onChange={(event) => setLoginId(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td><label><b>Password :</b></label></td>
                                    <td><input className="form-control" style={{ width: "100%" }} type="password" onChange={(event) => setPassword(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center" }}>
                                        <button className="btn btn-primary mt-3" type="button" onClick={handleLogin}>Login</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="mt-3" style={{ display: "flex" }}>
                                        <p><b>New User ?</b></p><Link to="/register" className="nav-link text-primary ms-2">Register</Link>
                                    </td>
                                    <td colSpan="1" className="mt-3" style={{ display: "flex" }}>
                                        <p><b>Trouble Logging in ?</b></p><Link to="/forgot-pw" className="nav-link text-danger ms-2">Forgot Password</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            )}
            {/* <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> */}
        </div>
    );
}

export default Login;
