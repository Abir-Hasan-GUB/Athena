import React from 'react';
import './OurAchievements.css';
import crezy from '../Image/surface1@2x.png';


const OurAchievements = () => {
    return (
        <div id="achievment" className="container achive">
            <div className="row">
                <div className="col-md-4 p-5 d-flex align-items-center">
                   <div>
                   <h2 className = "achivementTitle">Our Achievements</h2>
                    <p className = "achivementDetails">It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letter. </p>
                   </div>
                </div>
                <div className="col-md-8 achievmentRight p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="carvDiv1">
                                <div className="row">
                                    <div className="col-md-4 d-flex align-items-center">
                                    <i class="fas fa-grin-alt icon"></i>
                                    </div>
                                    <div className="col-md-8 d-flex align-items-center">
                                       <div>
                                       <h2>700+</h2>
                                        <p>Happy Clients</p>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carvDiv2">
                            <div className="row">
                                    <div className="col-md-4 d-flex align-items-center">
                                    <i class="icon">
                                        <img src={crezy} alt=""/>
                                    </i>
                                    </div>
                                    <div className="col-md-8">
                                    <h2>25+</h2>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="carvDiv1">
                        <div className="row">
                                    <div className="col-md-4 d-flex align-items-center">
                                    <i class="fas fa-trophy icon"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <h2>140+</h2>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                        </div>
                            <div className="carvDiv2">
                            <div className="row">
                                    <div className="col-md-4 d-flex align-items-center">
                                    <i class="fas fa-rocket icon"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <h2>75+</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default OurAchievements;