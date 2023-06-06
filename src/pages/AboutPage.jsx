// import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export function AboutPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
    navigate('/about/contact');
    }

    return(
        <div className="AboutMe-page">
            <h1 className="AboutMe-title">About Me</h1>
            <p className="AboutMe-blurb">
                Hi, I'm Shea! I'm a web development student at Coder Academy with a passion for all things tech. 
                When I'm not coding, you can find me playing Magic: The Gathering, video games, or getting lost in a good book. 
                I've always been interested in computers and technology and have previously studied game development in 2013. 
                Currently, I work in retail but am excited to transition into the tech industry and apply my skills to build amazing web experiences.
            </p>
            
            <button className="to-contact-page-btn" onClick={handleButtonClick}>
                Contact
            </button>
            <div className="aboutMe-resume-div">
                <p>Resume: </p>
                <a className="AboutPage-resume-link" href="<URL>" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFilePdf} />
                </a>
            </div>
        </div>
    )
}