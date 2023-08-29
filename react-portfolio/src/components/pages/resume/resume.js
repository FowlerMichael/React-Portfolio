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
        background: '#fafafa',
    }
}


export default function Resume(){
    return(
        <div className="Resume">
            <div style={styles.heading}>
                <h1>Resume</h1></div>
                <div style={styles.content}>
                    <p>
                    asfafafdfsadgf sfg
                    </p>
                </div>
        </div>
    )

}