import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import two from "../assets/teamtwo.png"
import one from "../assets/Awesome.png"
import three from "../assets/Image.png"

const Team = () => {
  return (
    <div>
        <section>
            <Container>
                <div>
                    <h1 style={{fontWeight:'Bold',fontSize:'32px',textAlign:'center',paddingTop:'64px',paddingBottom:'16px'}}>Team Section</h1>
                    <p style={{fontWeight:'400',fontSize:'16px',paddingLeft:'335px',paddingRight:'335px', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
                </div>
                <Row>
                 <Col lg={4}>
                  
                  <Card style={{width:'368px',height:'439px'}}>
      <Card.Img style={{width:'300px',height:'230px',alignItems:'center',paddingLeft:'70px'}} variant="top" src={one} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Full Name</Card.Title>
        <Card.Subtitle style={{textAlign:'center'}}>Job Title</Card.Subtitle>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

                 </Col>

                 {/* ====================2ND PART=============================== */}
     
       <Col lg={4}>
                  
                  <Card style={{width:'368px',height:'439px'}}>
      <Card.Img style={{width:'300px',height:'230px',alignItems:'center',paddingLeft:'70px'}} variant="top" src={two} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Full Name</Card.Title>
        <Card.Subtitle style={{textAlign:'center'}}>Job Title</Card.Subtitle>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

                 </Col>

                 {/* ===============================3RD PART================================== */}
                <Col lg={4}>
                  
                  <Card style={{width:'368px',height:'439px'}}>
      <Card.Img style={{width:'300px',height:'230px',alignItems:'center',paddingLeft:'70px'}} variant="top" src={three} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Full Name</Card.Title>
        <Card.Subtitle style={{textAlign:'center'}}>Job Title</Card.Subtitle>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

                 </Col>
               

                 

                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Team