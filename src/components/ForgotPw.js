import React,{useState} from "react";
import Axios from 'axios';
import bg from "../components/Images/pwbg.jpg";

export function ForgotPw()
{
    const [phno,setPhno] = useState('');
    const [email,setEmail] = useState('');
    const [newPassword,setNewPassword] = useState('');

    const handleUpdatePassword = () => {
        Axios.post('https://final-projectbackend.onrender.com/UserRoute/change-pw',{
            phno:phno,
            email:email,
            newPassword:newPassword,
        })
        .then((response)=>{
            if(response.status === 200)
            {
                alert("Password updated Successfully !");
                window.location.reload();
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((error)=>{
            alert(error);
        });
    };

    return(
        <div style={{backgroundImage:`url(${bg})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"100vh"}}>
            <input style={{width:"30%"}} className="form-control mx-auto" placeholder="Enter your Registered Phone Number" type="text" onChange={(e)=> setPhno(e.target.value)} />
            <input style={{width:"30%"}} className="form-control mx-auto my-2" placeholder="Enter your Registered Email Address" type="text" onChange={(e)=> setEmail(e.target.value)} />
            <input style={{width:"30%"}} className="form-control mx-auto my-2" placeholder="Enter your New Password" type="text" onChange={(e)=> setNewPassword(e.target.value)}/>
            <button className="btn btn-danger d-block mx-auto" type="button" onClick={handleUpdatePassword}>Update Password</button>
        </div>
    )
}