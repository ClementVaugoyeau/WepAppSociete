import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

export default function ReadHoro() {
    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        axios.get('https://localhost:7023/HorodatageUsers')
        .then( (response) => {
            setAPIData(response.data)
        } )
    })

    const setData = (data) => {
        let { idHorodatage, UserID, dateArrival, dateDeparture} = data;
        localStorage.setItem('ID', idHorodatage);
        localStorage.getItem('Identifiant', UserID);
        localStorage.setItem('Date entrée', dateArrival);
        localStorage.setItem('Date sortie', dateDeparture);
    }

    const getData = () => {
        axios.get(`https://61fa55d392093f0017ad972d.mockapi.io/HorodatageUsers`)
            .then((getData) => {
                 setAPIData(getData.data)
             })
    }

    const onDelete = (ID) => {
        axios.delete(`https://61fa55d392093f0017ad972d.mockapi.io/HorodatageUsers/${ID}`)
        .then( () => {getData()})
    }


    return(
        // <div>
            <div className="container field shadow">
                <table className="">
                    <thead className=""> 
                        <tr>                
                            <td>IdUser</td>
                            <td>Date entrée</td>
                            <td>Date sortie</td>
                        </tr>
                    </thead>
                    <tbody>
                        {APIData &&
                            APIData.map((user, index) => (
                            <tr  key={index}>
                                <td>{user.idUser}</td>
                                <td>{user.dateArrival}</td>
                                <td>{user.dateDeparture}</td>
                                {/* <td><Link to={`/users/${user.id}`}> Edit </Link></td> */}
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        // </div>
    )
}