import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('myServices.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id="services">
            <h2 className="pb-3 text-white fw-bolder">These are our Services</h2>
            <div className="row g-3">
                {
                    service.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;