import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Doctor from './Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('mydoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="my-custom-bg py-3">
                <div>
                    <h2 className="text-white pb-3">Our Doctors</h2>
                </div>
                <div className="row g-3">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Doctors;