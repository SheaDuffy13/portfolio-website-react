import { useNavigate } from "react-router-dom";
import hero from '../images/Blank-Profile-Picture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faHtml5,
  faJsSquare,
  faReact,
  faCss3
} from '@fortawesome/free-brands-svg-icons';
import expressImg from '../images/icon-express.png'
import mongodbImg from '../images/icon-mongodb-blue.png'
import postgresqlImg from '../images/icon-postgresql.png'
import resumePDF from "../images/SheaDuffy_Resume_WebDev.pdf";


export function AboutPage() {
    const navigate = useNavigate();

    const handleButtonClickContact = () => {
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
                        I've always been interested in computers and previously studied game development in 2013. 
                        Currently, I work in retail but am excited to transition into the tech industry and apply my 
                        skills to build amazing web experiences. <br />
                        <br />
                        When I'm not coding, you can find me playing Magic: The Gathering, video games, books, 
                        puzzles or drinking copious amounts of tea.

                    </p>

                    <div className="aboutMe-blurb-btns-div">
                    <button className="aboutMe-contact-btn" onClick={handleButtonClickContact}>
                            Contact Me
                        </button>
                        <button className="aboutMe-resume-btn" onClick={() => window.open(resumePDF, "_blank")}>
                            Resume
                        </button>
                    </div>
                </div>
                
            </div>

            <div className="aboutMe-techStack-div">
                <h3 className="aboutMe-techStack-title">Tech Skills</h3>
                <ul>
                    <FontAwesomeIcon icon={faHtml5} />
                    <li>HTML</li>
                    <FontAwesomeIcon icon={faCss3}/>
                    <li>CSS</li>
                    <FontAwesomeIcon icon={faJsSquare} />
                    <li>JavaScript</li>
                    <FontAwesomeIcon icon={faReact} />
                    <li>React</li>
                    <FontAwesomeIcon icon={faPython} />
                    <li>Python</li>
                    <img className="tech-icon" src={expressImg} alt="Express" />
                    <li>Express</li>
                    <img className="tech-icon" src={mongodbImg} alt="Express" />
                    <li>MongoDB</li>
                    <img className="tech-icon" src={postgresqlImg} alt="Express" />
                    <li>PostgreSQL</li>
                </ul>
            </div>

        </div>
    )
}