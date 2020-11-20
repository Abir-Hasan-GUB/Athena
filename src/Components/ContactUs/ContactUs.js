import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <div className="SectionThree d-flex justify-content-around row">
                <div className="col-md-6">
                    <img className="contactUs__img" src="https://i.ibb.co/6rr52MP/20-Converted-2x.png" alt=""/>
                </div>

                <div className="contactUs__dis col-md-6 d-flex align-content-center flex-wrap">
                    <h2>Stay Running & Project</h2>
                    <p>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letter.
                    </p>
                    <button className="contactUs__btn">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;