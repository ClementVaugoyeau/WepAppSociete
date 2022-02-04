import React from 'react';
import { Link, Navigate, useLocation  } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { userService } from '../Services/user-service'
import "./Login.css";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            let login = {
                "Pseudo": username,
                "Password": password
            }
            userService.login(login)
            .then(
                user => { 
                    <Navigate to="/create"/>
                },
                error => {
                    alert("Utilisateur non reconnu")
                }
            );

        }
    }

    render() {
        const { loggingIn } = this.state;
        const { username, password, submitted } = this.state;
        return (
            <div className="field shadow">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group btn-container">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

