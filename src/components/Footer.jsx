import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
      <footer>
        <div className='social-media-links-footer'>
          <a href="https://github.com/SheaDuffy13" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/shea-d-77979632/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>Copyright © 2023</p>
      </footer>
    );
  }