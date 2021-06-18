import logo from './logo.svg';
import './App.css';
import NavBar from './navbar.js'
import BodyDisplay from './landing/bodydisplay';
import EchoRadio from  './echoradio/echoradio.js'
import Contact from './contact/contact.js'
import About from './about/about.js'

function App() {
  return (
    <div className="App">
      <div id="top" className="top-content">
        <NavBar/>
        <BodyDisplay/>
      </div>
      <div id="about" className="about-content">
        <About/>
      </div>
      <div id="projects" className="project-content">
        <EchoRadio/>
      </div>
      <div id="contact" className="contact-content">
        <Contact/>
      </div>

    </div>
  );
}

export default App;
