import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container className=''>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/pngwing.png"
              width="60"
              height="55"
              className="d-inline-block align-top"
              style={{marginTop:'-5px'}}
            />{' '}
            <span className='h2'>Foodie Hub</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header