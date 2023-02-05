import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    //html code
    <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
            alt="no image"
              src="https://openclipart.org/image/2400px/svg_to_png/165896/restaurant.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '} &nbsp;
           My Resturant
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}
export default Header