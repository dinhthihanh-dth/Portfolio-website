import React from "react";
import './MyWork.css';
import { Element } from "react-scroll"; // thêm Element để cuộn đến


const MyWork = () => {
    return (
    <Element name="MyWork" className="mywork"> 
        <div>
            <div className="mywork">
                <div className="mywork-title">
                    <h1>Projects</h1>
                </div>
                <div className="mywork-container">
                    {/* Each image is wrapped in an anchor tag to link to the project */}
                    <div className="mywork-item">
                        <a href="https://thoi-trang-bigsize.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/image_1.jpg" alt="Project 1" />
                        </a>
                    </div>
                    <div className="mywork-item">
                        <a href="https://du-doan-suc-khoe-tinh-than-2.onrender.com" target="_blank" rel="noopener noreferrer">
                            <img src="/image_2.jpg" alt="Project 2" />
                        </a>
                    </div>
                    <div className="mywork-item">
                        <a href="https://link-to-your-project-3.com" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-your-image-3.jpg" alt="Project 3" />
                        </a>
                    </div>
                    <div className="mywork-item">
                        <a href="https://link-to-your-project-4.com" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-your-image-4.jpg" alt="Project 4" />
                        </a>
                    </div>
                    <div className="mywork-item">
                        <a href="https://link-to-your-project-5.com" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-your-image-5.jpg" alt="Project 5" />
                        </a>
                    </div>
                    <div className="mywork-item">
                        <a href="https://link-to-your-project-6.com" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-your-image-6.jpg" alt="Project 6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    );
}

export default MyWork;
