
import Axios from "axios";
import { useEffect, useState } from "react";
import { VaccinationList } from "./VaccinationList";
import bg from "../components/Images/listbg.jpg";

export function VaccinationData() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/VaccineRoute/")
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

    const VaccineList = () => {
        return arr.map((val, ind) => {
            return <VaccinationList obj={val} />
        })
    }

    return (
        <div style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh"}}>
            <table style={{ maxWidth: "60%"}} className='table table-bordered table-striped mx-auto'>
                <thead className='bg-light'>
                    <th className="text-center">Client Id</th>
                    <th className="text-center">Category of Pet</th>
                    <th className="text-center">Age</th>
                    <th className="text-center">Sex</th>
                    <th className="text-center">Vaccine</th>
                </thead>
                <tbody>
                    {VaccineList()}
                </tbody>
            </table>
        </div>
    )
}