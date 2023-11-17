
import  React,{useState} from "react";
import Axios from "axios";
import {VaccinationForm} from "./VaccinationForm";

export function Vaccinate()
{
    const [arr,setArr] = useState([]);

    const getState = (childData) =>{
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = { clientPhno: arr[0], category: arr[1], age: arr[2], petSex: arr[3], vaccine: arr[4] };
    
        Axios.post("https://final-projectbackend.onrender.com/VaccineRoute/vaccinate", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            if (res.status === 200) {
                alert("Vaccination Registered");
                window.location.reload();
            } else {
                alert("Failed to register vaccination");
            }
        })
        .catch((err) => {
            alert("An error occurred: " + err.message);
        });
    };
    

    return(
        <form onSubmit={handleSubmit}>
            <VaccinationForm getState={getState}>Submit</VaccinationForm>
        </form>
    )
}