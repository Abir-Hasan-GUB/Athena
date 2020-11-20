import React from 'react';
import './OurAchievements.css';


const OurAchievements = () => {
    return (
        <div className="d-flex justify-content-around row achivement__sec" >
            <div className="section__maindiv col-md-6">
                <h3>Our Achievements</h3>
                <p>It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letter.
                </p>
            </div>

            <div className="several__divs col-md-6 d-flex justify-content-around row">
                
                <div className=" achievments first__one d-flex justify-content-around col-md-5 d-flex align-content-center flex-wrap">
                    <div className="achive__img">
                        <img src="https://i.ibb.co/1bg0dtw/happy-2x.png" alt=""/>
                    </div>
                    <div className="achive__dis">
                        <h3>700+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>

                <div className="achievments d-flex justify-content-around col-md-5 d-flex align-content-center flex-wrap">
                    <div className="achive__img">
                        <img src="https://i.ibb.co/KxffTDD/marketing-2x.png" alt=""/>
                    </div>
                    <div className="achive__dis">
                        <h3>140+</h3>
                        <p>Project Completed</p>
                    </div>
                </div>

                <div className="achievments d-flex justify-content-around col-md-5 d-flex align-content-center flex-wrap">
                    <div className="achive__img">
                        <img src="https://i.ibb.co/qC9ZkL4/surface1-2x.png" alt=""/>
                    </div>
                    <div className="achive__dis">
                        <h3>25+</h3>
                        <p>Crazy Mind</p>
                    </div>
                </div>

                <div className="achievments d-flex justify-content-around col-md-5 d-flex align-content-center flex-wrap">
                    <div className="achive__img">
                        <img src="https://i.ibb.co/sVrwzVv/transportation-2x.png" alt=""/>
                    </div>
                    <div className="achive__dis">
                        <h3>75+</h3>
                        <p>Running Projects</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurAchievements;