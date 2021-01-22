import React from 'react';

const About: React.FC = () => {

    const style: React.CSSProperties = {
        margin: "0",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
    };

    return (
        <div style={style}>
            <p>Sergio Villanueva!</p>
        </div>
    );
};

export default About;