import React, { useState, useEffect } from "react";
import bg from "../components/Images/vaccinebg.jpg";

export function VaccinationForm(props) {
    
    const [clientPhno, setClientPhno] = useState(props.clientPhnoValue);
    const [category, setCategory] = useState(props.categoryValue);
    const [age, setAge] = useState(props.ageValue);

    useEffect(()=>{
        setClientPhno(props.clientPhnoValue);
        setCategory(props.categoryValue);
        setAge(props.ageValue);
    },[props.clientPhnoValue,props.categoryValue,props.ageValue]);

    const [petSex, setPetSex] = useState('');
    const [vaccine,setVaccine] = useState('');

    const handleSexChange=(event)=>{
        setPetSex(event.target.value);
    };

    const handleVaccine=(event)=>{
        setVaccine(event.target.value);
    };

    const arr=[clientPhno,category, age, petSex, vaccine];

    const handleClick = (e) =>{
        props.getState(arr);
    };

    return (
        <div style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh"}}>
            <center><p className="display-3">Please fill in all the details</p></center>
            <input style={{ width: "40%", position: "static" }} placeholder="Enter your Phone number" onChange={(event)=> setClientPhno(event.target.value)} className="form-control mx-auto my-2" />
            <input style={{ width: "40%", position: "static" }} placeholder="Enter your pet's category" onChange={(event)=> setCategory(event.target.value)} className="form-control mx-auto my-2" />
            <input style={{ width: "40%", position: "static" }} placeholder="Enter your pet's age" onChange={(event)=>setAge(event.target.value)} className="form-control mx-auto my-2" />
            <select style={{width:"40%", position:"static"}} className="form-control mx-auto my-2" value={petSex} onChange={handleSexChange}>
                <option value="">
                    Select sex
                </option>
                <option value="male">
                    Male
                </option>
                <option value="female">
                    Female
                </option>
            </select>
            <select style={{width:"40%", position:"static"}} className="form-control mx-auto my-2" value={petSex} onChange={handleVaccine}>
                <option value="">
                    Select vaccine
                </option>
                <option value="canine-parvovirus">
                    Canine parvovirus
                </option>
                <option value="distemper">
                    distemper
                </option>
                <option value="canine-hepatitis">
                    canine hepatitis
                </option>
                <option value="rabies">
                    rabies
                </option>
            </select>
            <button onClick={handleClick} className="btn btn-primary d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}