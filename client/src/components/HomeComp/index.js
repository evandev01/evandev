import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Burger from './assets/icons/burger_icon.jpg';
import Fit from './assets/icons/fit-track-img.jpg';
import EDB from './assets/icons/icon_eDB.jpg';
import Pass from './assets/icons/pass-gen-img.jpg';
import Quiz from './assets/icons/quiz-img.jpg';
import './style.css';
import 'animate.css';

function HomeComp(props) {
    return (
        <div >
            <Container >
                <Jumbotron className='jumbotron'>
                    <div  >
                        <Row>
                            <Col> <Image className='animate__animated animate__flipInX' id='icon' src={Burger} /></Col>
                            <Col><Image className='animate__animated animate__flipInX' id='icon' src={Fit} /></Col>
                            <Col><Image className='animate__animated animate__flipInX' id='icon' src={EDB} /> </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col><Image className='animate__animated animate__flipInX' id='icon' src={Pass} /></Col>
                            <Col><Image className='animate__animated animate__flipInX' id='icon' src={Quiz} /></Col>
                            <Col><Image className='animate__animated animate__flipInX' id='icon' /></Col>
                        </Row>
                    </div>
                </Jumbotron>
            </Container>
        </div>
    )
};

export default HomeComp;