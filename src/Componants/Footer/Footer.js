import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const fb = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instra = <FontAwesomeIcon icon={faInstagram} />
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
const youtube = <FontAwesomeIcon icon={faYoutube} />

const Footer = () => {
    return (
        <div id="Footer" className="footer p-5 container">
            <div className="row">
                <div className="col-md-4">
                <h5>Connect with Us</h5>
                    <ul className="socialLink">
                        <li> <a href="#">{youtube}</a></li>
                        <li> <a href="#">{fb}</a></li>
                        <li> <a href="#">{instra}</a></li>
                        <li> <a href="#">{twitter}</a></li>
                        <li> <a href="#">{whatsapp}</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Features</h5>
                    <ul className="footerLi">
                        <a href="#"> <li>Enterprise</li></a>
                        <a href="#"> <li>Pricing</li></a>
                        
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Blog</h5>
                    <ul className="footerLi">
                        <a href="#"> <li>Help Center</li></a>
                        <a href="#"> <li>Contact Us</li></a>
                        <a href="#"> <li>Status</li></a>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h5>About Us</h5>
                    <ul className="footerLi">
                        <a href="#"> <li>Terms of Service</li></a>
                        <a href="#"> <li>Security</li></a>
                        <a href="#"> <li>Login</li></a>
                    </ul>
                </div>
            </div>
            <p className="copyright"> © Copyright {new Date().getFullYear()} Programming Hero. All Rights Reserved"</p>
        </div>
    );
};

export default Footer;