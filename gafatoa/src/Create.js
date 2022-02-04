import React, { useState } from 'react';

import axios from 'axios'

export default function Create() {
    const [UserID, setUserID] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [InOutDate, setInOutDate] = useState();

    const postData = () => {
        axios.post(`https://61fa55d392093f0017ad972d.mockapi.io/User`, {
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
                    <input placeholder='Prénom' onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Nom</label>
                    <input placeholder='Nom' onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Identifiant</label>
                    <input placeholder="Identifiant" onChange={(e) => setUserID(e.target.value)}/>
                </div>
                <button onClick={postData} type='submit'>Envoyer</button>
            </div>
        </div>
    )
}