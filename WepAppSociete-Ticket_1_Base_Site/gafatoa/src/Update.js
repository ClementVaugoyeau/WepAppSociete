import React, { useState, useEffect } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Update() {
    const [UserID, setUserID] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [InOutDate, setInOutDate] = useState();

    const [ID, setID] = useState(null)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('Prénom'))
        setLastName(localStorage.getItem('Nom'))
        setUserID(localStorage.getItem('Identifiant'))
    }, [])

    const updateAPIData = () => {
        axios.put(`https://61fa55d392093f0017ad972d.mockapi.io/User/${ID}`, {
            UserID,
            FirstName,
            LastName,
            InOutDate
        })
    }

    return (
        <div>
            <div className="create-form">
                <div>
                    <label>Prénom</label>
                    <input placeholder='Prénom' value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Nom</label>
                    <input placeholder='Nom' value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Identifiant</label>
                    <input placeholder="Identifiant" value={UserID} onChange={(e) => setUserID(e.target.value)}/>
                </div>
                <button onClick={updateAPIData} type='submit'>Mettre à jour</button>
            </div>
        </div>
    )
}