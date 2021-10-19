import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="img-bg">
            <img className="img-fluid" src="https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg" alt="" />
            <Link className="btn btn-warning m-5" to="/home">Back to Home</Link>
        </div>
    );
};

export default NotFound;