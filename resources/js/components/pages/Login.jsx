import React, {useEffect, useState, useForm} from 'react';
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
    const API_URL = "http://localhost:8000/api/";
    const headersJson = {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
    };
    const navigate = useNavigate();
    const [authErrors, setAuthErrors] = useState({
        loginErrors: '',
        validationErrors: {}
    });
    const [token, setToken] = useState(AuthService.getToken());

    useEffect(() => {
        if (token) {
            navigate('/favourite');
        }
    }, []);

    function authUser(event) {
        event.preventDefault();
        let data = new FormData(event.target);
        data = JSON.stringify(Object.fromEntries(data));
        axios
            .post(API_URL + "login", data, {
                headers: headersJson
            })
            .then(response => {
                if (response.data.access_token) {
                    console.log('hello');
                    localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
                    navigate('/favourite');
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    setAuthErrors((prevState) => {
                        return ({
                            ...prevState,
                            loginErrors: error.response.data.error
                        });
                    })
                    console.log(authErrors);
                }
                if (error.response.status === 422) {
                    console.log(error.response.data);
                    setAuthErrors((prevState) => {
                        return ({
                            ...prevState,
                            validationErrors: error.response.data.errors
                        });
                    })
                   console.log(authErrors);
                }
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            {authErrors.loginErrors &&
                                <div className="alert alert-danger" role="alert">
                                    {authErrors.loginErrors}
                                </div>
                            }
                            <form onSubmit={authUser}>

                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email
                                        Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email"
                                               className="form-control"
                                               name="email" required autoComplete="email"
                                               autoFocus/>

                                        {authErrors.validationErrors.email && authErrors.validationErrors.email
                                            .map((emailError, key) =>
                                                <span className="text-danger" role="alert" key={key}>
                                                    <strong>{emailError}</strong>
                                                </span> )}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="password"
                                           className="col-md-4 col-form-label text-md-end">Password</label>
                                    <div className="col-md-6">
                                        <input id="password" type="password"
                                               className="form-control"
                                               name="password" required autoComplete="current-password"/>
                                        {authErrors.validationErrors.password && authErrors.validationErrors.password
                                            .map((passwordError, key) =>
                                                <span className="text-danger" role="alert" key={key}>
                                                    <strong>{passwordError}</strong>
                                                </span> )}
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
