// import React from "react";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
    navigate('/about/contact');
    }

    return(
        <div>
            <h1>About Page</h1>
            <button className="to-contact-page-btn" onClick={handleButtonClick}>
                Contact
            </button>
            
        </div>
    )
}