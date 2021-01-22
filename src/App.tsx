import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  const [page, setPage] = useState('');

  const goToPage = (page: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setPage(page);
  };

  const content = () => {
    if (page === '') {
      return <About />;
    } else if (page === 'portfolio') {
      return <Portfolio />;
    } else if (page === 'contact') {
      return <Contact />;
    }
  };

  return (<div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="">
        <img src='https://avatars.githubusercontent.com/u/65696419' className='image' />  Sergio Villanueva</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="" active={page === ''} onClick={goToPage('')}>About</Nav.Link>
          <Nav.Link href="" active={page === 'portfolio'} onClick={goToPage('portfolio')}>Portfolio</Nav.Link>
          <Nav.Link href="" active={page === 'contact'} onClick={goToPage('contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container adjust">
      {content()}
    </div>
    <div className='footer'>
      <div className='container'>
        2021
      </div>
    </div>
  </div>);
};

export default App;
