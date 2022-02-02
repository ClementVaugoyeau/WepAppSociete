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
        this.state = {
            users: [],
            checkInDate: null,
            checkOutDate: null,
            user:null
        };
    }

    componentDidMount() {
        this.retrieveUsers();
    }


    handleCheckInDate(e) {
        this.setState({ checkInDate: e });
    };

    handleChangeUser(e) {
        console.log(e)
        this.setState({ user: e });
    };

    handleCheckOutDate(e) {
        this.setState({ checkOutDate: e });
    };

    retrieveUsers() {
    
    fetch("https://localhost:7023/Users")
        .then(res => res.text())
        .then(res => {
            console.log(res)
            this.setState({  users: JSON.parse(res) })
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        // const { checkInDate,  checkOutDate} = this.state;

         console.log(e)
        // let horodatage : {
        //     {
        //     "idHorodatage": 0,
        //     "idUser": e.idUser,
        //     "user": {
        //         "idUser": 0,
        //         "nom": "string",
        //         "prenom": "string",
        //         "poste": "string",
        //         "email": "string"
        //     },
        //     "dateArrival": "2022-02-02T15:45:43.337Z",
        //     "dateDeparture": "2022-02-02T15:45:43.337Z"
        //     }
        // }

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(user)
        // };

        // return fetch(`https://localhost:7023/HorodatageUsers`, requestOptions).then(handleResponse);
        
    }

    render() {
    const { users, checkInDate,  checkOutDate} = this.state;
    
        return (
                <div className="App">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        {users && users.map((user, index) => (
                            <select key={index}>
                                <option>{user.prenom}</option>
                            </select>
                        ))
                        }
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
