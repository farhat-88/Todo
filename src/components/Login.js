import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if fields are empty
        const errorsObj = {};
        
        if (username === '') {
            errorsObj.username = 'Username is required';
        }

        if (password === '') {
            errorsObj.password = 'Password is required';
        }

        // If there are errors, set the state
        if (Object.keys(errorsObj).length > 0) {
            setErrors(errorsObj);
        } else {
            // Perform form submission logic here
            console.log('Form submitted:', { username, password });
            // Clear errors if submission is successful
            setErrors({ username: '', password: '' });
            navigate('/firmware');
        }
    };

    return (
        <div className="body_section">
            <section className="h-100 gradient-form">
                <div className="container py-5" style={{ height: '100vh' }}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-6">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-12">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="tab-login">Login</a>
                                                </li>
                                            </ul>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="username">Username</label>
                                                    <input type="text" id="username" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                </div>
                                                {errors.username && <p className="error_message">{errors.username}</p>}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <input type="password" id="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                {errors.password && <p className="error_message">{errors.password}</p>}
                                                {/* Submit Button */}
                                                <div className="text-center pt-1 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 btn_url" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginForm;
