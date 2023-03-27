import React, { useState, useRef } from 'react';
import './ProjectCard.css';
import { Button } from './Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CSSTransition} from 'react-transition-group';




function ProjectCard({title, subtitle, hyperlinks=[], images=[], description="", specialFeatures=[]}) {
    let [changeText, setChangeText] = useState(false);
    const handleChange = () => {
        return setChangeText(!changeText);
    };
    const nodeRef = useRef(null);

    let linksSection = [];
    let keyCounter = 0;
    for (let i = 0; i < hyperlinks.length; i++) {
        linksSection.push(
            <a className="project-card-links" href={hyperlinks[i][0]} key={keyCounter}>
                {hyperlinks[i][1]} <FontAwesomeIcon icon={hyperlinks[i][2]} />
            </a>
        );
        keyCounter += 1;
    }

    let imageSection = [];
    for (let i = 0; i < images.length; i++) {
        imageSection.push(
            <PhotoView src={images[i]} key={keyCounter}>
                <img className="project-image" src={images[i]} alt="" />
            </PhotoView>
        );
        keyCounter += 1;
    }



    return (
        <>
            <div className='project-card'>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={() => handleChange()} >
                    {
                        changeText ? 
                        <FontAwesomeIcon icon="fa-solid fa-minus" /> :
                        <FontAwesomeIcon icon="fa-solid fa-plus" />    
                    }
                </Button>
            </div>
            <CSSTransition
              in={changeText}
              nodeRef={nodeRef}
              timeout={300}
              classNames="alert"
              unmountOnExit >
                <div ref={nodeRef} className='detailed-card'>
                    <div className='links-section'>
                        {linksSection}
                    </div>
                    <div className='project-content-wrapper'>
                        <div className='description-section'>
                            {description}
                            <div className='features-project-section'>
                                {specialFeatures}
                            </div>
                        </div>
                        <div className='img-section'>
                            <PhotoProvider>
                                {imageSection}
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    ); 
}

export default ProjectCard;