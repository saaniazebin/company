import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import awesome from "../assets/awesome.png"

const Awesome = () => {
  return (
    <div>
        <section style={{paddingTop:'64px'}}>
            <Container>
                <Row>
                    <Col lg={6}>
                    <h1 style={{fontWeight:'bold',fontSize:'56px',width:'550px'}}>Title Copy Goes Here Be Awesome</h1>
                    <p style={{fontSize:'18px',fontWeight:'400',width:'540px',padding:'24px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                     <button style={{background:'black',color:'white',padding:'12px 24px'}}>GRT STARTED</button>
                    </Col>
                    {/* ===================2ND PART======================== */}
                    <Col LG={6}>
                    <img  src={awesome} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Awesome