import React from 'react';

const styles = {
    contact: {
        margin: '20px',
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
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#f5f5f5',
        minHeight: 300,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'black',
    }
}

export default function Contact() {
   
    return (
        <div className="Contact">  
            <div style={styles.heading}>Contact</div>
            <div style={styles.content}>
                <p>Email: XXXXXXXXXXXXXX </p>
                <p>Phone: XXXXXXXXXXXXXX </p>
                <p>Github: XXXXXXXXXXXXXX </p>
                <p>LinkedIn: XXXXXXXXXXXXXX </p>
            </div>
        </div>
    );
}