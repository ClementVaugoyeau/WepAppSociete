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

    // retrieveUsers() {
    
    //     fetch("https://localhost:7023/Users")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));


    //     this.setState({
    //         users: UserDataService.getAll()
    //     });

    //     // UserDataService.getAll()
    //     // .then(response => {
    //     //     this.setState({
    //     //     users: response
    //     //     });
    //     // })
    //     // .catch(e => {
    //     //     console.log(e);
    //     // });
    // }

    const onDelete = (ID) => {
        axios.delete(`https://61fa55d392093f0017ad972d.mockapi.io/User/${ID}`)
        .then( () => {getData()})
    }

    // const TableExamplePagination = () => (
    //     <table>
    //         <thead className='partieDroite'>
    //             <table>
    //                 <td>Prénom</td>
    //                 <td>Nom</td>
    //                 <td>Indentifiant</td>
    //                 <td>Update</td>
    //                 <td>Supprimer</td>
    //             </table>
    //         </thead>
      
    //         <tbody>
    //             {APIData.map( (data) => {return(
    //                 <tr>
    //                     <td>{data.FirstName}</td>
    //                     <td>{data.LastName}</td>
    //                     <td>{data.UserID}</td>
    //                     <Link to={'/update'}>
    //                         <td>
    //                             <button primary onClick={ () => setData(data)}>Allez</button>
    //                         </td>
    //                     </Link>
    //                     <td>
    //                         <button secondary onClick={ () => onDelete(data.id)}>Adieux</button>
    //                     </td>
    //                 </tr>
    //             )} ) }
    //         </tbody>

    //     </table>
    //   )

    return(
        // <div>
            <div className="read">
                <table className="table-responsive table-bordered m-2">
                    <thead className="table-responsive m-2"> 
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