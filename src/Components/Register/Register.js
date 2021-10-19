import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, error, isLogin, toggleLogin, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth();

    const iconsFa = <FontAwesomeIcon icon={faGlobe} />
    return (
        <>
            <Header></Header>
            <div className="bg-custom">
                <h2 className="pt-3 mb-3 text-white">Register</h2>
                <form onSubmit={handleRegistration} className="w-50 mx-auto form-bg-custom">
                    <div>
                        <div className="input-group flex-nowrap mb-3">
                            <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label form="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label form="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="row mb-3 text-danger fw-bolder px-4">
                        {error}
                    </div>
                    <div className="mb-3 form-check">
                        <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">{isLogin ? "Click Login below" : "Already have an account?"}</label>
                    </div>
                    <div className="mb-3 d-inline-flex">
                        <p> Here is the login button</p>
                        <Link className="mx-3" to="/login">Login</Link>
                    </div>
                    <div className="mb-1 form-check">
                        <button type="submit" className="login-submit-btn">Submit</button>
                        <button onClick={signInUsingGoogle} className="google-btn">{iconsFa} Google Sign in</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;