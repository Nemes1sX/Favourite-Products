import React, {useEffect, useState, useForm} from 'react';
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(AuthService.getToken());

    useEffect( () => {
      if (token) {
          navigate('/favourite');
      }
    }, []);

    function authUser(event) {
        event.preventDefault();
        let data = new FormData(event.target);
        data = JSON.stringify(Object.fromEntries(data));
        AuthService.login(data).then(() => {
            navigate('/favourite');
            window.location.reload();
        });
        console.log(data);
    }

return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Login</div>

                    <div className="card-body">
                        <form onSubmit={authUser}>

                            <div className="row mb-3">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email
                                    Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email"
                                           className="form-control"
                                           name="email" required autoComplete="email"
                                           autoFocus/>

                                    {errors.email}
                                    <span className="invalid-feedback" role="alert">
                                        <strong>{errors.email}</strong>
                                        </span>
                                    {errors}
                                </div>
                            </div>

                                <div className="row mb-3">
                                    <label htmlFor="password"
                                           className="col-md-4 col-form-label text-md-end">Password</label>
                                    <div className="col-md-6">
                                        <input id="password" type="password"
                                               className="form-control"
                                               name="password" required autoComplete="current-password"/>

                                            <span className="invalid-feedback" role="alert">
                                        <strong>{errors.password}</strong>
                                    </span>
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
