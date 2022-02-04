import React, { Component } from 'react';
import "./PostHorodatages.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

export default class PostHorodatages extends Component  {

    constructor(props) {
        super(props);
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.handleCheckInDate = this.handleCheckInDate.bind(this);
        this.handleCheckOutDate = this.handleCheckOutDate.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            users: [],
            checkInDate: null,
            checkOutDate: null,
            user:"",
            IdUser: 0
        };
    }

    componentDidMount() {
        this.retrieveUsers();
    }


    handleCheckInDate(e) {
        console.log(e)
        console.log(e.target.value)
        this.setState({ checkInDate: e.target.value });
        // console.log(this.state)
    };

    handleChangeUser(e) {
        console.log(e)
        console.log(e.target.value)
        this.setState({ IdUser: e.target.value.split(' ')[0] });
        console.log(this.state)
    };

    handleCheckOutDate(e) {
        e.preventDefault();
        console.log(e)
        this.setState({ checkOutDate: e.target.value });
        // console.log(this.state)
    };

    retrieveUsers() {
    
    fetch("https://localhost:7023/Users")
        .then(res => res.text())
        .then(res => {
            // console.log(res)
            this.setState({  users: JSON.parse(res) })
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        const { users, checkInDate,  checkOutDate, IdUser} = this.state;
        console.log(checkInDate)
        console.log(checkOutDate)
        console.log(IdUser)
        var parsedDateIn = new Date(checkInDate);
        var parsedDateOut = new Date(checkOutDate);
        let horodatage = {
            "idUser": this.state.IdUser,
            "dateArrival": parsedDateIn,
            "dateDeparture": parsedDateOut
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(horodatage)
        };
        console.log(requestOptions)
        return fetch(`https://localhost:7023/HorodatageUsers`, requestOptions);
        
    }

    render() {
    const { users, checkInDate,  checkOutDate, user} = this.state;
    
        return (
                <div className="container field shadow">
                <form name="form" className='form' onSubmit={this.handleSubmit}>
                    <div className="form">
                        <select value={this.state.idUser} name="user" onChange={this.handleChangeUser} className="flex-column padding-bot" aria-label="Default select example">
                            <option>""</option>
                            {users && users.map((user, index) => (                              
                                    <option key={index} value={user.IdUser}>{user.idUser} {user.nom} {user.prenom}</option>                           
                            ))
                            }
                        </select>
                        <div className='form-group flex-column padding-bot'>
                            <label htmlFor="start">Heure d'arrivée :</label>
                            <input type="datetime-local" id="depart" name="depart" onChange={this.handleCheckInDate}></input>                         
                        </div>
                        <div className='form-group flex-column padding-bot'>
                            <label htmlFor="start">Heure de départ :</label>
                            <input type="datetime-local" id="arrivee" name="arrivee" onChange={this.handleCheckOutDate}></input>
                        </div>   
                        {/* <div>
                            <label>Check-out</label>
                            <DatePicker
                                selected={checkOutDate}
                                minDate={checkInDate}
                                onChange={this.handleCheckOutDate}
                            />
                        </div> */}
                    </div>
                    {/* {checkInDate && checkOutDate && (
                        <div className="summary">
                        <p>
                            You book a hotel from {moment(checkInDate).format("LL")} to{" "}
                            {moment(checkOutDate).format("LL")}.
                        </p>
                        </div>
                    )} */}
                    <div className='btn-container'>
                            <button className="btn btn-primary">Enregistrer</button>
                    </div>
                    </form>
                </div>
        );
    }
}
