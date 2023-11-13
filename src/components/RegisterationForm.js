import React, { useState, useEffect } from "react";
import bg from "./Images/regbg.jpg";

export function RegisterationForm(props) {
  const [fname, setFname] = useState(props.fnameValue);
  const [lname, setLname] = useState(props.lnameValue);
  const [phno, setPhno] = useState(props.phnoValue);
  const [email, setEmail] = useState(props.emailValue);
  const [password, setPassword] = useState(props.pwValue);

  useEffect(() => {
    setFname(props.fnameValue);
    setLname(props.lnameValue);
    setPhno(props.phnoValue);
    setEmail(props.emailValue);
    setPassword(props.pwValue);
  }, [props.fnameValue, props.lnameValue, props.phnoValue, props.emailValue, props.pwValue]);

  const arr = [fname, lname, phno, email, password];

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    props.getState(arr);
  };

  return (
    <div>
      {/* Keep the form element here */}
      <form className="form" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
        <center>
          <table>
            <tbody>
              <tr>
                <td colSpan="2" className="h1">Please Enter Your Details</td>
              </tr>
              <tr>
                <td><label>Enter your First name :</label></td>
                <td><input className="form-control" type="text" onChange={(event) => setFname(event.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Enter your Last name :</label></td>
                <td><input className="form-control" type="text" onChange={(event) => setLname(event.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Enter your Contact number :</label></td>
                <td><input className="form-control" type="number" onChange={(event) => setPhno(event.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Enter your email :</label></td>
                <td><input className="form-control" type="email" onChange={(event) => setEmail(event.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Enter your password :</label></td>
                <td><input className="form-control" type="password" onChange={(event) => setPassword(event.target.value)} /></td>
              </tr>
              <tr>
                <td colSpan="2"><label>Re-Enter your password :</label></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button onClick={handleClick} className="mt-3 btn btn-primary" type="submit">Register</button>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </form>
    </div>
  );
}
