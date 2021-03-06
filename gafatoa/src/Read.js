import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        axios.get('https://localhost:7023/Users')
        .then( (response) => {
            setAPIData(response.data)
        } )
    })

    const setData = (data) => {
        let { id, UserID, FirstName, LastName, InOutDate } = data;
        localStorage.setItem('ID', id);
        localStorage.getItem('Identifiant', UserID);
        localStorage.setItem('Prénom', FirstName);
        localStorage.setItem('Nom', LastName);
        localStorage.setItem('Soyeux', InOutDate);
    }

    const getData = () => {
        axios.get(`https://localhost:7023/Users`)
            .then((getData) => {
                 setAPIData(getData.data)
             })
    }

    const onDelete = (ID) => {
       
        axios.delete(`https://localhost:7023/Users/${ID}`)
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
                            <td>Options</td>
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
                                <td> <button type="button" className ='btn btn-primary' onClick={() =>onDelete(user.idUser)}>
                                    Supprimer 
                                    </button>
                                </td>                            
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        // </div>
    )
}