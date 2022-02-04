import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        // axios.get('https://61fa55d392093f0017ad972d.mockapi.io/User')
        axios.get('https://localhost:7023/Users')
        .then( (response) => {
            setAPIData(response.data)
        } )
    }, [])

    const setData = (data) => {
        let { id, UserID, FirstName, LastName, InOutDate } = data;
        localStorage.setItem('ID', id);
        localStorage.getItem('Identifiant', UserID);
        localStorage.setItem('Prénom', FirstName);
        localStorage.setItem('Nom', LastName);
        localStorage.setItem('Soyeux', InOutDate);
    }

    const getData = () => {
        axios.get(`https://61fa55d392093f0017ad972d.mockapi.io/User`)
            .then((getData) => {
                 setAPIData(getData.data)
             })
    }

    const onDelete = (ID) => {
        axios.delete(`https://61fa55d392093f0017ad972d.mockapi.io/User/${ID}`)
        .then( () => {getData()})
    }


    return(
        // <div>
            <div className="container field shadow">
                <table className="">
                    <thead className=""> 
                        <tr>                
                            <td>IdUser</td>
                            <td>Nom</td>
                            <td>Prenom</td>
                            <td>Poste</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {APIData &&
                            APIData.map((user, index) => (
                            <tr  key={index}>
                                <td>{user.idUser}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.poste}</td>
                                <td>{user.email}</td>
                                {/* <td><Link to={`/users/${user.id}`}> Edit </Link></td> */}
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        // </div>
    )
}