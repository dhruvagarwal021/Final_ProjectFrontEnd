
export function VaccinationList(props)
{
    const{clientPhno,category,age,petSex,vaccine} = props.obj;

    return(
        <tr>
            <td>{clientPhno}</td>
            <td>{category}</td>
            <td>{age}</td>
            <td>{petSex}</td>
            <td>{vaccine}</td>
        </tr>
    )
}