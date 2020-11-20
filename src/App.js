import React from 'react';
import './App.css';
import ChooseTeam from './Componants/ChooseTeam/ChooseTeam';
import Footer from './Componants/Footer/Footer';
import OurAchievements from './Componants/OutAchievements/OurAchievements';
import ContactUs from './Components/ContactUs/ContactUs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div className = "container">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <ContactUs></ContactUs>
      <OurAchievements></OurAchievements>
      <ChooseTeam></ChooseTeam>
      <Footer></Footer>
    </div>
  );
};

export default App;