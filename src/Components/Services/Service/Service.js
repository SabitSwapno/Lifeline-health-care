import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, ward, description, img } = props.service
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card-group">
                <div className="card bg-card-custom">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <small>Ward no: {ward}</small>
                        <br />
                        <Link to={`/details/${id}`}>
                            <button className="login-submit-btn">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;