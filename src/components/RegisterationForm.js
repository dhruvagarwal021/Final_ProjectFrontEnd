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
    props.getState(arr);
  };

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"100vh"}}>
      <p className="display-3 text-center">Enter Your Details</p>
      <input style={{width:"40%",position:"static"}} onChange={(event) => setFname(event.target.value)} placeholder="Enter your First Name" className="form-control mx-auto"/>
      <input style={{width:"40%",position:"static"}} onChange={(event) => setLname(event.target.value)} placeholder="Enter your Last Name" className="form-control mx-auto my-3" />
      <input style={{width:"40%",position:"static"}} onChange={(event) => setPhno(event.target.value)} placeholder="Enter your Ph No" className="form-control mx-auto my-3" />
      <input style={{width:"40%",position:"static"}} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" className="form-control mx-auto my-3" />
      <input style={{width:"40%",position:"static"}} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" className="form-control mx-auto my-2" />
      <button onClick={handleClick} className="btn btn-success d-block mx-auto" type="submit">{props.children}</button>
    </div>
  );
}
