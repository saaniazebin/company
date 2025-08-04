import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import company from "../assets/company.png"

const Menu = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{padding:'17px 0px'}} href="#home"><img src={company} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{gap:'32px'}} className="ms-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
             <Nav.Link href="#link">Pricing</Nav.Link>
             <button style={{background:'black',color:'white',padding:'8px,20px'}}>GRT STARTED</button>
             </Nav>
           </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu