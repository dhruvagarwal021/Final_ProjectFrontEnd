import React, { useState } from "react";
import Axios from "axios";
import { RegisterationForm } from "./RegisterationForm";

function Register() {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = { fname: arr[0], lname: arr[1], phno: arr[2], email: arr[3], password: arr[4] };

        Axios.post("https://final-projectbackend.onrender.com/UserRoute/register", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

            .then((res) => {
                console.log("Server response:", res);
                if (res.status === 200) {
                    alert("Record added successfully!");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
    }


    return (
        <form onSubmit={handleSubmit}>
            <RegisterationForm getState={getState}>Register</RegisterationForm>
        </form>
        // <div>
        //     <RegisterationForm getState={getState}></RegisterationForm>
        //     <button onClick={handleSubmit} className="mt-3 btn btn-primary" type="button">
        //         Register
        //     </button>
        // </div>
    );
}

export default Register;
