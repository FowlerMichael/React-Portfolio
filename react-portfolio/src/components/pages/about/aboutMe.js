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
    content: {
        padding: 20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#f5f5f5',
        lineHeight: 3.5,
        fontSize: '1.rem',
        color: 'black',
    }
}


export default function aboutMe(){
   return(
       <div className="AboutMe">
       <div style={styles.heading}>About me </div>
       <p style={styles.content}>
            I am a web developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, and am always looking for new things to learn.
            Im currently living in Fayetteville Arkansas 
            I am a very hardworking person who is very passionate about helping others.
       </p>
       </div>
   );
}