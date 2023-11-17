import Axios from 'axios';
import { useEffect, useState } from 'react';
import { PetsList } from './PetsList';
import bg from "../components/Images/listbg.jpg";


export function AdoptPet() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/PetsRoute/")
            .then((res) => {
                if (res.status === 200) {
                    setArr(res.data);
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            })
    }, []);

    const ListPets = () => {
        return arr.map((val, ind) => {
            return <PetsList obj={val} />
        })
    }

    return (
        <div style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh"}}>
            <table style={{ maxWidth: "60%", margin: "50px auto" }} className='table table-bordered table-striped table-danger'>
                <thead className='bg-light'>
                    <th>Category</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Weight in Kg</th>
                    <th>Condition</th>
                    <th>Click to Select Yours</th>
                </thead>
                <tbody>
                    {ListPets()}
                </tbody>
            </table>
        </div>
    )
}