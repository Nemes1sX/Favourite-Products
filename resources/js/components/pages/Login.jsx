import React, {useState} from 'react';

export default function Login() {
    const [loginUser, setLoginUser] = useState({
        'email': '',
        'password': ''
    });
    const [errors, setErrors] = useState([]);

    function authUser() {
        console.log('Hello');
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
                                           className="col-md-4 col-form-label text-md">Password</label>

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
