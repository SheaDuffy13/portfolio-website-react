import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function ContactPage() {
    const [confirmationMessage, setConfirmationMessage] = useState('');
                // dev
    // const [confirmationMessage, setConfirmationMessage] = useState('Your message has been sent successfully!');

    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
        emailjs.sendForm('service_hnu743m', 'template_28amgik', event.target, 'GZsC3Vb34Y5LFogOV')
        .then((result) => {
            console.log(result.text);
            // alert('Your message has been sent successfully!');
            setConfirmationMessage('Your message has been sent successfully!');
        }, (error) => {
            console.log(error.text);
            // alert('Something went wrong');
            setConfirmationMessage('Something went wrong');
        });
    };
  
    return (
      <div>
        <div className='contactPage-email-div'>
          <h3 className='email-title'>Email</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="from_name" placeholder="Your Name" required />

            <input type="email" id="email" name="from_email" placeholder="Your Email" required />

            <input type="text" id="subject" name="subject" placeholder="Subject" required />

            <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>

            <button type="submit">Send</button>
          </form>
          {confirmationMessage && <p className='confirmation-msg'>{confirmationMessage}</p>}
                    {/* dev  */}
          {/* <p className='confirmation-msg'>{confirmationMessage}</p> */}
        </div>

        <div className='contactPage-socials-div'>
          <h3 className='contactPage-socials-title'>Social Media:</h3>
          <p>GitHub:</p>
          <a href="https://github.com/SheaDuffy13" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>LinkedIn:</p>
          <a href="https://linkedin.com/in/shea-d-77979632/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    );
  }
  