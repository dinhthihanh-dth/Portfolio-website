import React from "react";
import './About.css';
import profile_img from '../../assets/profile_img.jpg';
import { Element } from "react-scroll"; // thêm Element để cuộn đến

const About = () => {
    return (
        <Element name="About" className="about"> {/* name trùng với Navbar */}
            <div className="about-title">
                <h1>About me</h1>
            </div>

            <div className="about-sections">

                <div className="about-right">
                    <div className="about-para">
                        <p>Mình đặc biệt yêu thích các lĩnh vực như phát triển phần mềm, machine learning, và phân tích dữ liệu. Ngoài việc học, mình cũng chủ động tham gia các dự án, cuộc thi công nghệ, và thực tập để rèn luyện kỹ năng làm việc thực tế.</p>
                        <p>Trong quá trình học, mình đã tích lũy được kiến thức nền tảng vững chắc về lập trình, cấu trúc dữ liệu & giải thuật, phát triển web, trí tuệ nhân tạo, và cơ sở dữ liệu.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>AI simple</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </Element>
    );
};

export default About;
