import React from 'react';

const About: React.FC = () => {

    const style: React.CSSProperties = {
        margin: "0",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
    };

    return (
        <div style={style} >
            <h2>Hi, I{'\''}m Sergio Villanueva</h2>
            <h6 style={{ textAlign: 'center' }}>A backend developer</h6>
        </div>
    );
};

export default About;