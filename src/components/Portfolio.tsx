import React from 'react';

const Portfolio: React.FC = () => {
    const repos = [
        {
            name: 'hexdump95.github.io',
            description: 'This website!',
            language: 'Javascript',
            using: ['React, Bootstrap, GitHub Pages']
        },
        {
            name: 'acceleo-project',
            description: 'A project I did for the DSDM subject, source code contains the Acceleo part of a Spring Boot project generator using MDD technology.',
            language: 'Java',
            using: ['Eclipse Modeling Tools', 'Acceleo']
        },
        {
            name: 'mongodb-demo',
            description: 'An unfinished project, it is supposed to be a REST API of a library. Travis-CI is used to deploy the app to Heroku.',
            language: 'Java',
            using: ['Spring Webflux', 'Swagger', 'MongoDB', 'Travis-CI', 'Heroku']
        },
        {
            name: 'ng-mongodb-demo',
            description: 'The frontend for the mongodb-demo project.',
            language: 'TypeScript',
            using: ['Angular', 'Bootstrap']
        },
        {
            name: 'microservice-customer',
            description: 'A microservice which has customer info, it\'s supposed to be a part of an e-commerce site.',
            language: 'Java',
            using: [' Spring Boot', 'JPA', 'PostgreSQL', 'Swagger', 'Travis-CI', 'Docker', 'Docker-compose']
        },
        {
            name: 'persona',
            description: 'It\'s a REST API we did in Java in the TPA subject, but in nodejs.',
            language: 'TypeScript',
            using: ['NestJS', 'Swagger', 'TypeORM', 'MySQL']
        },
        {
            name: 'weather_forecast',
            description: '',
            language: 'Dart',
            using: ['Flutter']
        }
    ];

    const spaceBetween: React.CSSProperties = { height: '20px' };

    return (
        <div className="container">
            {repos.map(repo =>
                <div key={repo.name} >
                    <div style={{ backgroundColor: 'white', borderStyle: 'dotted', borderColor: 'black' }}>
                        <div style={spaceBetween}> </div>
                        <div className="container" style={{ wordWrap: 'break-word' }}>
                            <h3>hexdump95/<a href={`https://github.com/hexdump95/${repo.name}`}>{repo.name}</a></h3>
                            <h5>{repo.description}</h5>
                            <p>Language: {repo.language}</p>
                            <p style={{ color: "grey", fontSize: 14 }}>{repo.using.map((u, i) => i >= (repo.using.length - 1) ? u : `${u}, `)}</p>
                        </div>
                    </div>
                    <div style={spaceBetween}> </div>
                </div>
            )
            }
        </div >);
};

export default Portfolio;