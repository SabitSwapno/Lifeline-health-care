import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, speciality, charge, number } = props.doctor
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card card-bg">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 fw-bolder">{speciality}</h6>
                    <p className="card-text">Per visit {charge}/-</p>
                    <p className="card-text"> Contact no: {number}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;