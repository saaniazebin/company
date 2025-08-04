import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const Form = () => {
  return (
    <div>
        <section>
            <Container>
                <div style={{paddingTop:'64px'}}>
                    <h1 style={{fontWeight:'bold',fontSize:'32px',textAlign:'center',paddingBottom:"16px"}}>Get in Touch</h1>
                    <p style={{fontWeight:'400',fontSize:"18",textAlign:'center'}}>Let us know how we can help</p>
                </div>

                {/* =========================================================
                                      form
                ============================================================= */}
                  <div>
                    
                     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        Submit
      
    </Form>
      
    
                  </div>
                 

                
            </Container>
        </section>
    </div>
  )
}

export default Form