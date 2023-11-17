import Axios from "axios";

export function PetsList(props)
{
    const {_id,Category,age,sex,weight_kg,condition} = props.obj;

    const handleClick=()=>
    {
        Axios.delete("https://final-projectbackend.onrender.com/PetsRoute/sell-pet/"+_id)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Congratulations your order is booked Successfully !");
                window.location.reload();
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

    return(
        <tr>
            <td>{Category}</td>
            <td>{age}</td>
            <td>{sex}</td>
            <td>{weight_kg}</td>
            <td>{condition}</td>
            <td>
                <button className="ms-3 btn btn-success" onClick={handleClick}>Adopt it</button>
            </td>
        </tr>
    )
}