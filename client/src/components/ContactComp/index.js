import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';
import './style.css';
import 'animate.css';

function ContactComp(props) {
    return (
        <div id='form'>
            <Container>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control 
                            className='animate__animated animate__backInDown '
                            placeholder="First name"
                            type="text"
                            onChange={props.firstNameChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                            className='animate__animated animate__backInDown '
                            placeholder="Last name" 
                            type="text"
                            onChange={props.firstNameChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlInput1">

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        className='animate__animated animate__backInDown '
                        placeholder="name@gmail.com"
                        type="email"  
                        onChange={props.emailChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Please select: </Form.Label>
                        <Form.Control 
                        className='animate__animated animate__backInDown '
                        as="select"
                        onChange={props.occupationChange}>
                            <option>I am: </option>
                            <option>an employer</option>
                            <option>an industry professional</option>
                            <option>an instructor</option>
                            <option> a student</option>
                            <option>   other</option>
                        </Form.Control>
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form>

                    </Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control 
                        className='animate__animated animate__backInDown '
                        placeholder="Subject" 
                        type="text"
                        onChange={props.subjectChange}/>

                        <Form.Label>Message: </Form.Label>
                        <Form.Control 
                        className='animate__animated animate__backInDown '
                        as="textarea" 
                        rows={5} 
                        onChange={props.messageChange}/>
                    </Form.Group>

                    <Button
                    className='animate__animated animate__heartBeat'
                    variant="primary" 
                    type="submit"
                    onSubmit={props.submit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
};

export default ContactComp;