import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { userService } from '../Services/user-service'
import "./Login.css";


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (username && password) {
            let login = {
                "Pseudo": username,
                "Password": password
            }
            userService.login(login)
            .then(
                user => { 
                    if (user["idUser"] != 0) {
                       navigate("/create") 
                    }else{
                       alert("Utilisateur non reconnu")
                       localStorage.removeItem("user"); 
                    }                   
                },
                error => {
                    alert(error)
                }
            );

        }
    }

        return (
            <div className="field shadow">
                <h2>Login</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group btn-container">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );

}

