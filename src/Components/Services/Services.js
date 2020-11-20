import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <>
            <div className="sec2__dis">
                <h2>What We Do.</h2>
                <p>Our main focus is to make the User Experience very <br/>
                    simple and easy. Simplicity is our Strength.</p>
            </div>

        <div className="services d-flex justify-content-around row">

            <div className="works col-md-5 col-lg-2">
                <img src="https://i.ibb.co/zbQpsBw/Group-65-2x.png" alt=""/>
                <h3>Experience Design</h3>
                <p>The point of using Lorem
                Ipsum is that it has a more-orless normal.</p>
            </div>

            <div className="works col-md-5  col-lg-2">
                <img src="https://i.ibb.co/L12rf7H/Group-66-2x.png" alt=""/>
                <h3>Interface Design</h3>
                <p>The point of using Lorem
                Ipsum is that it has a more-orless normal.</p>
            </div>

            <div className="works col-md-5  col-lg-2">
                <img src="https://i.ibb.co/6ZcvcVg/Group-69-2x.png" alt=""/>
                <h3>Prototyping</h3>
                <p>The point of using Lorem
                Ipsum is that it has a more-orless normal.</p>
            </div>

            <div className="works col-md-5  col-lg-2">
                <img src="https://i.ibb.co/zbQpsBw/Group-65-2x.png" alt=""/>
                <h3>Illustration</h3>
                <p>The point of using Lorem
                Ipsum is that it has a more-orless normal.</p>
            </div>

            
        </div>
        </>
    );
};

export default Services;