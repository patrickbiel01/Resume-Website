import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css';

function Home() {

  return (
    <>
        <header id={"about"} role={"banner"}>
            <div id={"homeBanner"} className={"content-wrap"}>

                <div id={"home-content-container"}>
                    <img className="profile-img" src="../../images/star-scape-2.jpg" alt="Patrick Biel" width="200px" height="200px"/>
                    <h1 id={"about"} >Patrick Biel</h1>
                    <h3 id={"student-tag"} >Computer Engineering Student</h3>
                </div>

                <div className="contact-info">
                    <a target="_blank" rel="noreferrer" href="mailto:patrickbiel.dev@gmail.com">
                        <FontAwesomeIcon className="contact-info-icon" icon={['fas', 'envelope']}></FontAwesomeIcon>
                        patrickbiel.dev@gmail.com
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/patrickbiel01/">
                        <FontAwesomeIcon className="contact-info-icon" id="githubIcon" icon={['fab', 'github']}></FontAwesomeIcon>
                        patrickbiel01
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-biel-810a81170/">
                        <FontAwesomeIcon className="contact-info-icon" id="linkedinIcon" icon={['fab','linkedin']} />
                        Patrick Biel
                    </a>
                </div>
            </div>
        </header>

        <section id="aboutBanner" className="skills" role="region">
            <h2>About Me</h2>
            <p>Hey there! I'm Patrick, currently a computer engineering student at the University of Toronto. </p>
            <p>I enjoy everything related to electronics but I also enjoy training and designing machine learning models.</p>

            <h3>Skills</h3>
            <div className="skill-row">
                <div className="skill-col">
                    <p>Kernel Driver and Firmware Development</p>
                    <p>C, C++ Programming</p>
                    <p>Robotics</p>
                    <p>Computer Vision</p>
                </div>
                <div className="skill-col">
                    <p>Crypthography and Zero-Knowledge Proofs</p>
                    <p>Full-stack web development</p>
                    <p>iOS and Android Development</p>
                    <p>MATLAB</p>
                </div>
            </div>
        </section>
        
    </>
  );
}

export default Home;