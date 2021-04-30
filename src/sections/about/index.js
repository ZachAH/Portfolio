import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Full Stack web developer looking to start my career</h3>
                            <div className="separator" />
                            <p>I recently graduated the certificate program from UWM Extended Campus. This was a full stack bootcamp utilizing the MERN stack. Immediately after graduation I started and completed a 60 hour react certificate course. I am currently enrolled in another course because, lets face it learning in web development never ends! I am trying to find my first career into web development which is proving to be as hard or even harder then the bootcamp itself(I know hard to believe..right?!)</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/ZachAH')}/>
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://linkedin.com/in/zach-howell-189118210/') } />
                                
                           

                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Javascript"  />
                                <Progress name="GraphQL"  />
                                <Progress name="React" />
                                <Progress name="Node.js"  />
                                <Progress name="Express"  />
                                <Progress name="CSS & SCSS"  />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero