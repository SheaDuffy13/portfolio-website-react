// import React from "react";
import { useNavigate } from "react-router-dom";
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import hero from '../images/hero.jpg'


export function AboutPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
    navigate('/about/contact');
    }

    return(
        <div className="AboutMe-page">
            <div className="AboutMe-content">

                <div className="AboutMe-hero-div">
                    <img className='AboutMe-hero-img' src={hero} alt='' />
                </div>

                <div className="AboutMe-blurb-div">
                    <h2 className="AboutMe-title">About Me</h2>
                    <p className="AboutMe-blurb">
                        Hi, I'm Shea! I'm a web development student at Coder Academy with a passion for all things tech. 
                        I've always wanted to work in the IT industry and previously studied game development in 2013. 
                        Currently, I work in retail but am excited to transition into the tech industry and apply my skills to build amazing web experiences.
                    </p>

                    <div className="aboutMe-blurb-btns-div">
                    <button className="aboutMe-contact-btn" onClick={handleButtonClick}>
                            Contact Me
                        </button>
                        <button className="aboutMe-resume-btn" onClick={handleButtonClick}>
                            Resume
                        </button>
                    </div>
                </div>
            </div>

            {/* <div class="tech-stack">
                <h3>Tech Stack</h3>
                <ul>
                    <li>C#</li>
                    <li>Python</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>React</li>
                </ul>
            </div> */}

        </div>
    )
}