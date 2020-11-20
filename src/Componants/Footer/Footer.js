import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo from "../Image/logo.png";

const fb = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

const Footer = () => {
    return (
        <div id="Footer" className="footer p-5 container">
             <div className="FooterTitle text-center mb-5">
                    <h1>Get your design right, right now</h1>
                    <p className = "text-center text-gray mt-3 mb-5">Be the first know our latest offers and updates!</p>
                   <div className = "buttonBody"> <input type="text" placeholder = "Enter your email address" name="" id="" /> <button className="btn">Get Started</button> </div>
                </div>
            <div className="row">
                <div className="col-md-4">
                <a href="#">
                <img className = "img-fluid logo" src={logo} alt="logo"/>
                </a>
                    <ul className="socialLink mt-5">
                        <li> <a href="#">{fb}</a></li>
                        <li> <a href="#">{twitter}</a></li>
                        <li> <a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li> <a href="#"><i class="fas fa-basketball-ball"></i></a></li>
                        <li> <a href="#"><i class="fab fa-behance"></i></a></li>
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
        </div>
    );
};

export default Footer;