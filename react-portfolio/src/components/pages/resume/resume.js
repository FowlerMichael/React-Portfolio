import React from 'react';

const styles = {
    heading: {
        background: '#3f51b5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    resume: {
        background: '#f5f5f5',
        padding: '0 20px',
        color: 'black',
    }
}


 function Resume() {
    return (
        <div style={styles.heading}>Resume 
    <div className="resume" style={styles.resume}>
   
      <h1>Michael Fowler</h1>
      <p>Web Developer</p>
    

    <section className="summary">
      <h2>Summary</h2>
      <p>Passionate web developer with experience...</p>
    </section>

    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h5>Company Name</h5>
        <p>Position - Date</p>
        <p>Job description...</p>
      </div>
    </section>

    <section className="education">
      <h2>Education</h2>
      <div className="education-item">
        <h5>University Name</h5>
        <p>Degree - Graduation Year</p>
      </div>
    </section>

    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </section>
  </div>
  </div>
    );
}

export default Resume;