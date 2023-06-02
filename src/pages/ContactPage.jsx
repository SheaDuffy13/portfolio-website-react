import { useState } from 'react';
import emailjs from 'emailjs-com';

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
        <h1 className='email-title'>Email Me</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="from_name" placeholder="Name" required />

        <input type="email" id="email" name="from_email" placeholder="Email" required />

        <input type="text" id="subject" name="subject" placeholder="Subject" required />

        <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
      {confirmationMessage && <p className='confirmation-msg'>{confirmationMessage}</p>}
                {/* dev  */}
      {/* <p className='confirmation-msg'>{confirmationMessage}</p> */}
      </div>
    );
  }
  