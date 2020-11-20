import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <Services></Services>
        <ContactUs></ContactUs>
    </div>
  );
}

export default App;
