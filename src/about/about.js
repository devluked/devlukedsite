import './about.scss'
import resume from './resume.png'
import csuf from './csuf.png'
import me1 from './pic1.jpg'

function About() {
    return (
        <div className="about-body">
            <div className="about-container">
                <div className="junk">
                    <div className="top-left"><h1 id="about-me-top-txt">About Me</h1></div>
                    <div className="top-right"></div>
                    </div>
                    <div className="about-text">
                    <div className="left-container">
                        <h1 id="desc-text">
                            Aspiring developer with experience in front end development, software engineering and data analytics.
                        </h1>
                    </div>
                    <div className="right-container">

                    </div>

                    </div>

                    <div className="junk">
                    <div className="top-left"></div>
                    <div className="top-right-2"><h1 id="education-bottom-txt">Education</h1></div>
                    </div>

                    <div className="education-text">
                    <div className="left-container">
                    
                    </div>
                    <div className="right-container-2">
                    <h1 id="desc-text">
                            Graduated from Cal State University Fullerton in 2021 with a degree in Computer Science; cum laude.
                        </h1>
                    </div>

                    </div>

                    
                    <div className="junk">
                    <div className="top-left"><h1 id="skills-bottom-text">Skills</h1></div>
                    <div className="top-right-2"></div>
                    </div>

                    <div className="education-text">
                    <div className="left-container-3">
                    <h1 id="desc-text">
                            JavaScript | HTML | CSS
                            ReactJS | NodeJS | Flexbox
                            GitHub | MongoDB
                        </h1>
                    </div>
                    <div className="right-container-2">
                    
                    </div>

                </div>
                

           
            </div>



        </div>
    )
}

export default About