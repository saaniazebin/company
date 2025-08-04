import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import one from "../assets/logoone.png"
import two from "../assets/logotwo.png"
import three from "../assets/logothree.png"
import four from "../assets/logofour.png"
const Client = () => {
  return (
    <div>
        <section>
            <Container>
                <h1 style={{fontWeight:"bold",fontSize:'18px',textAlign:'center',paddingTop:'64px'}}>Clients Section</h1>
                <Row style={{paddingTop:'32px',paddingBottom:'64px'}}>
                    <Col lg={2}><img src={one} alt="" /></Col>
                     <Col lg={2}><img src={two} alt="" /></Col>
                      <Col lg={2}><img src={three} alt="" /></Col>
                       <Col lg={2}><img src={four} alt="" /></Col>
                        <Col lg={2}><img src={one} alt="" /></Col>
                         <Col lg={2}><img src={one} alt="" /></Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Client