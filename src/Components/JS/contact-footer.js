import React from 'react';  
import { Link } from "react-router-dom";
import '../CSS/contact-footer.css';
import Me from '../../Assets/self.png';
import Contact from '../../Assets/contact.png';
import Insta from '../../Assets/insta.png';

export default function ContactFooter() {
    return (
        <div>
            <hr className="footer-hr"></hr>
            <div className="contactFooter">
                <div className="contact-blurb">
                    <h3 className="contact">Whakapā mai!</h3>
                    <p id="footer-text">Contact me with opportunities, or to say hey 🙋🏻‍♀️ </p>
                    <div className="contact-links">
                        <Link to="/about" id="about">
                            <img className="contact-icon" src={Contact} alt="envelope icon" />
                        </Link> 
                        <a href="https://www.instagram.com/"><img className="contact-icon" src={Insta}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}