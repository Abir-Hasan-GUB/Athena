import React from 'react';
import './App.css';
import ChooseTeam from './Componants/ChooseTeam/ChooseTeam';
import Footer from './Componants/Footer/Footer';
import OurAchievements from './Componants/OutAchievements/OurAchievements';
import ContactUs from './Components/ContactUs/ContactUs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div className = "container">
      <Navbar></Navbar>
      <Header></Header>
      <ContactUs></ContactUs>
      <OurAchievements></OurAchievements>
      <ChooseTeam></ChooseTeam>
      <Footer></Footer>
    </div>
  );
};

export default App;