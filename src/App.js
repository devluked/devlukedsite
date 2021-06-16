import logo from './logo.svg';
import './App.css';
import NavBar from './navbar.js'
import BodyDisplay from './landing/bodydisplay';
import EchoRadio from  './echoradio/echoradio.js'
import Contact from './contact.js'
import About from './about/about.js'

function App() {
  return (
    <div className="App">
      <div className="top-content">
        <NavBar/>
        <BodyDisplay/>
      </div>
      <div className="about-content">
        <About/>
      </div>
      <div className="project-content">
        <EchoRadio/>
      </div>
      <div className="contact-content">
        <Contact/>
      </div>

    </div>
  );
}

export default App;
