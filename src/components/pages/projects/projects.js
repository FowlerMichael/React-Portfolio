import React from 'react';
import image from './images/p12.png';
import image2 from './images/maze.png';
import image3 from './images/readmePic.png';




const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
  innerCard: {
    background: '#fff',
    padding: 20,
    borderRadius: 5,
    boxShadow: '0px 0px 5px #ccc',
    margin: '10px 50px',

  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.2rem',
    padding: '0 20px',
    color: '#3f51b5',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
      color: 'blue',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      background: 'white',
      borderRadius: 5,
      padding: 5,
    }
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Projects Page</div>
      <div style={styles.content}>
        <div className='Card1' style={styles.innerCard}>
        <h3>Kanban Board</h3>
         <img src={image} fluid="true" width="100%" height="100%" 
         style={{borderRadius: 5}} alt="Kanban Board"/>
          <p>Group made Kanban Board</p>
          <span>
          <a href="https://github.com/HolyTonyyyy/Project-1">GitHub Link</a>
          </span>
        </div>
       
        <div className='Card2' style={styles.innerCard}>
          <h3>Maze Game</h3>
          <img src={image2} fluid="true" width="100%" height="100%" 
         style={{borderRadius: 5}} alt="Maze Game"/>
          <p>Group made Maze Game</p>
          <div style={styles.links}>
          <span>
          <a href="https://github.com/HolyTonyyyy/Maze">GitHub Link</a>
          </span>
          <span>
          <a href="https://maze-project-dc526e280a7e.herokuapp.com/">Heroku Link</a>
          </span>
          </div>
        </div>
        <div className='Card3' style={styles.innerCard}>
          <h3>ReadMe Generator</h3>
          <img src={image3} fluid="true" width="100%" height="100%" 
         style={{borderRadius: 5}} alt="Maze Game"/>
          <p>  A readme file generator that would generate the file from being prompted in the terminal using node.js</p>
          <div style={styles.links}>
          <span>
          <a href="https://github.com/FowlerMichael/ReadME-Generator">GitHub Link</a>
          </span>
          <span>
          <a href="https://drive.google.com/file/d/1eeHVypGSwaa80jfQDmiphf8DZXZCMkwd/view">Screencastify Link</a>
          </span>
        </div>
        </div>
    </div>  
    </div>
  );
}

export default Card;
