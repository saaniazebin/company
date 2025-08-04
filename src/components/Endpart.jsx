import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import company from "../assets/company.png"
import companyone from "../assets/companyotwo.png"
import resource from "../assets/RESOURCES.png"
import about from '../assets/ABOUT.png'
const Endpart = () => {
  return (
    <div>
        <section>
            <Container>
                <Row>
                    <Col lg={4} style={{paddingRight:'40px'}}>
                    <img src={company} alt="" />
                
                    </Col>
                     <Col lg={2} style={{paddingRight:'32px'}}>
                     <img src={companyone} alt="" />
                     <ul style={{paddingLeft:"0",listStyleType:"none"}}>
                        <li>How it</li>
                        <li>works</li>
                        <li>Pricing</li>
                        <li>Demo</li>
                     </ul>
                     </Col>
                      <Col lg={2} style={{paddingRight:'32px'}}>
                      <img src={resource} alt="" />
                      <ul style={{paddingLeft:"0",listStyleType:"none"}}>
                           <li>Blog post name goes here</li>
                           <li>Blog post name goes here</li>
                           <li>Blog post name goes here</li>
                           <li>See all resource</li>
                     </ul>
                      </Col>
                       <Col lg={2} style={{paddingRight:'32px'}}>
                        <img src={about} alt="" />
                           <ul style={{paddingLeft:"0",listStyleType:"none"}}>
                           <li>Terms & Conditions</li>
                           <li>Privacy Policy</li>
                           </ul>
                       </Col>
                </Row>
                 <footer style={{textAlign:'center',paddingTop:'40px'}}>
                    <Row>
                        <p>Copyright © 2022 Company name</p>
                    </Row>
                    
                     </footer>
                
            </Container>
        </section>
    </div>
  )
}

export default Endpart