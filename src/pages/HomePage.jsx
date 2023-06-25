import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import ParticleCanvas from '../components/Particles';


export function HomePage() {
    const navigate = useNavigate();

    const handleContactButtonClick = () => {
        navigate('/about/contact');
    };

    return(
        <div className='homePage-div'>
            <div className='homePage-name-div'>
                <h1>Shea Duffy</h1>
                <p>Aspiring Web Developer</p>
                <div className='HomePage-social-media-links'>
                    <a href="https://github.com/SheaDuffy13" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/shea-d-77979632/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                {/* <p>Skills in:</p> */}
                <button onClick={handleContactButtonClick}>Contact Me</button>
            </div>

                <ParticleCanvas />            
            
        </div>
    )
}