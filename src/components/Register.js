import { useState } from "react";
import Axios from "axios";
import bg from "./Images/regbg.jpg";

function Register() {
    
    const [arr,setArr] = useState([]);

    const getState = (ChildData)=>{
        //ChildData=[Raj,Agarwal,xxxxxx9991,123@gmail.com,12445]
        setArr(ChildData);
    }

    const handleSubmit=()=>{
        const data={fname:arr[0],lname:arr[1],phno:arr[2],email:arr[3],password:arr[4]};
        Axios.post("mongodb+srv://dhruvagarwal743:<password>@petcare.7se3z0m.mongodb.net/Users",data)
        .then((res)=>{
            console.log(res);
            if(res.status === 200)
            {
                alert("Successfully Registered !");
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return (
        <div>
            <form className="form" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }} onSubmit={handleSubmit}>
                <center>
                    <table>
                        <th className="h1">Please Enter Your Details</th>
                        <tr>
                            <span><label>Enter your First name : </label><input className="form-control" type="text"></input></span>
                        </tr>
                        <tr>
                            <span><label>Enter your Last name : </label><input className="form-control" type="text"></input></span>
                        </tr>
                        <tr>
                            <span><label>Enter your Contact number : </label><input className="form-control" type="number"></input></span>
                        </tr>
                        <tr>
                            <span><label>Enter your email : </label><input className="form-control" type="email"></input></span>
                        </tr>
                        <tr>
                            <span><label>Enter your password : </label><input className="form-control" type="password"></input></span>
                        </tr>
                        <tr>
                            <span><label>Re-Enter your password : </label><input className="form-control" type="password"></input></span>
                        </tr>
                        <center><button className="mt-3 btn btn-primary">Register</button></center>
                    </table>
                </center>
            </form>
        </div>
    )
}

export default Register;