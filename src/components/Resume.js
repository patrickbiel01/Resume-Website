import React from 'react';
import './Resume.css';
import resumeFile from '../resources/Resume_Patrick_Biel.pdf';

function Resume() {
    return (
      <>
        <object width="100%" height="100px" data={resumeFile} type="application/pdf">   </object>
      </>
    ); 
}

export default Resume;