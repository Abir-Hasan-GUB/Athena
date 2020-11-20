import React from 'react';
import './ChooseTeam.css';

const ChooseTeam = () => {
    return (
        <div className = "container chooseTeam">
                <div className="TeamTitle text-center mt-5 mb-5">
                    <h1>Choose Your Dedicated Team</h1>
                </div>
            <div class="card-deck text-center mb-5">
  <div class="card">
    
    <div class="card-body">
      <h1 class="card-title">$199</h1>
      <p>For Basic</p>
    </div>
    <div className="border"></div>
    <div className="priceList">
        <ul>
            <li>Homepage</li>
            <li>No Inner Page</li>
            <li>Asset file</li>
            <li>Source file</li>
            <li>Free Stock Photos</li>
            <li>10 Days Free Support</li>
            <li>24/7 Support</li>
        </ul>
    <button className="btn btn-primary abir mb-3 mt-5">Order Now</button>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h1 class="card-title">$399</h1>
      <p>For Basic</p>
    </div>
    <div className="border"></div>
    <div className="priceList">
        <ul>
            <li>Homepage</li>
            <li>4 Inner Page</li>
            <li>Asset file</li>
            <li>Source file</li>
            <li>Free Stock Photos</li>
            <li>20 Days Free Support</li>
            <li>24/7 Support</li>
        </ul>
    <button className="btn btn-primary abir mb-3 mt-5">Order Now</button>
    </div>
  </div>

  <div class="card">
  
    <div class="card-body">
      <h1 class="card-title">$599</h1>
      <p>For Basic</p>
    </div>
    <div className="border"></div>
    <div className="priceList">
        <ul>
            <li>Homepage</li>
            <li>8 Inner Page</li>
            <li>Asset file</li>
            <li>Source file</li>
            <li>Free Stock Photos</li>
            <li>30 Days Free Support</li>
            <li>24/7 Support</li>
        </ul>
    <button className="btn btn-primary abir mb-3 mt-5">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChooseTeam;