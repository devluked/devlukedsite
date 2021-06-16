import personalimg from "./Personalpic.png"
import './Bodydisplay.css'

function BodyDisplay() {
    return (
    <div className="body-display">
        <div className="body-text">
            <h1 id="luke-text" style={{color:"white"}}>
                Luke
            </h1>
            <h1 id="duggan-text" style={{color:"#00c7d1"}}>
                Duggan
            </h1>
        </div>
        <div className="body-img">
            <img src={personalimg}></img>
        </div>
        <div className="more-text">
            <h1 id="front-end-text">
                Front End Developer
                </h1>
            <h1 style={{color:"white"}}>
            Based in California,<br/> I'm a developer with a <br/>background in ReactJS
            </h1>
            <h5 style={{color:"white", fontWeight:"10"}}>
                With an eye for minimal and sleek web designs,<br/> I'm capable of developing many kinds of web apps
                <br/><br/>
                <p style={{color:"#ff613d"}}>
                <a rel="noreferrer" target="_blank" href="mailto:devlukeduggan@gmail.com">E: devlukeduggan@gmail.com</a>
                <br/>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/devlukeduggan/">L: www.linkedin.com/devlukeduggan</a>
                <br/>
                <a rel="noreferrer" target="_blank" href="https://www.github.com/devluked">G: www.github.com/devluked</a>
                </p>
                
            </h5>
        </div>
    </div>

    )
}

export default BodyDisplay