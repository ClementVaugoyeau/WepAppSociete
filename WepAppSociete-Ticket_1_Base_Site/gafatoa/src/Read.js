import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        axios.get('https://61fa55d392093f0017ad972d.mockapi.io/User')
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

    const TableExamplePagination = () => (
        <table>
            <thead className='partieDroite'>
                <table>
                    <td>Prénom</td>
                    <td>Nom</td>
                    <td>Indentifiant</td>
                    <td>Update</td>
                    <td>Supprimer</td>
                </table>
            </thead>
      
            <tbody>
                {APIData.map( (data) => {return(
                    <tr>
                        <td>{data.FirstName}</td>
                        <td>{data.LastName}</td>
                        <td>{data.UserID}</td>
                        <Link to={'/update'}>
                            <td>
                                <button primary onClick={ () => setData(data)}>Allez</button>
                            </td>
                        </Link>
                        <td>
                            <button secondary onClick={ () => onDelete(data.id)}>Adieux</button>
                        </td>
                    </tr>
                )} ) }
            </tbody>

        </table>
      )

    return(
        <div>
            <div>
                {TableExamplePagination()}
            </div>
        </div>
    )
}