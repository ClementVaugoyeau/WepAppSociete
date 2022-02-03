import React, { Component } from 'react';
import "./PostHorodatages.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


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
        this.setState({ checkInDate: e });
        // console.log(this.state)
    };

    handleChangeUser(e) {
        console.log(e)
        console.log(e.target.value)
        this.setState({ IdUser: e.target.value.split(' ')[0] });
        console.log(this.state)
    };

    handleCheckOutDate(e) {
        this.setState({ checkOutDate: e });
        // console.log(this.state)
    };

    retrieveUsers() {
    
    fetch("https://localhost:7023/Users")
        .then(res => res.text())
        .then(res => {
           
            
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

        let horodatage = {
            "idUser": this.state.IdUser,
            "dateArrival": checkInDate,
            "dateDeparture": checkOutDate
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
                <div className="container">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="">
                        <select value={this.state.idUser} name="user" onChange={this.handleChangeUser} className="form-select" aria-label="Default select example">
                            <option>""</option>
                            {users && users.map((user, index) => (                              
                                    <option key={index} value={user.IdUser}>{user.idUser} {user.nom} {user.prenom}</option>                           
                            ))
                            }
                        </select>
                        <div>
                            <label>Check-in</label>
                            <DatePicker
                                selected={checkInDate}
                                minDate={new Date()}
                                onChange={this.handleCheckInDate}
                            />
                        </div>
                        <div>
                            <label>Check-out</label>
                            <DatePicker
                                selected={checkOutDate}
                                minDate={checkInDate}
                                onChange={this.handleCheckOutDate}
                            />
                        </div>
                    </div>
                    {/* {checkInDate && checkOutDate && (
                        <div className="summary">
                        <p>
                            You book a hotel from {moment(checkInDate).format("LL")} to{" "}
                            {moment(checkOutDate).format("LL")}.
                        </p>
                        </div>
                    )} */}
                    <button className="btn btn-primary">Enregistrer</button>
                    </form>
                </div>
        );
    }
}
