import React from 'react'
import './Services.css'
import profile_img from '../../assets/profile_img.jpg'
import services_data from '../../assets/sevices_data.js'
import { Element } from "react-scroll";


const Services = () => {
    return (
        <Element name='Services' className='services'>
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                
            </div>
            <div className="services-container">
                {services_data.map((service, index) => {
                    return (
                        <div key={index} className='services-format'>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className='service-readmore'>
                                <p>Read More</p>
                                <img src="#" alt="read more" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </Element>
    )
}

export default Services
