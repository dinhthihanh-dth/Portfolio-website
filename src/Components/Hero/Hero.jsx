import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_img} alt="" />
             <h1><span>Tôi tên là Đinh Thị Hạnh</span>, là sinh viên năm cuối ngành công nghệ thông tin</h1>
             <p>Tôi có kĩ năng về lập trình,.. </p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My resum</div>
                </div>  
        </div>
    )
    
}
export default Hero
