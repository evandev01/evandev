import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Photo from './assets/black_tie_smile.jpeg';
import Logo from './assets/reactImg.png';
import './style.css';

function AboutComp() {
    return (
        <div>
            <Container>
                <Jumbotron id='jumbo'>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col/>
                            <Col>
                                <Image id='logo' src={Logo}></Image>
                            </Col>

                            <Col>
                                <Image id='logo' src={Logo}></Image>
                            </Col>

                            <Col>
                                <Image id='logo' src={Logo}></Image>
                            </Col>

                            <Col>
                                <Image id='logo' src={Logo}></Image>
                            </Col>
                            <Col/>
                            </Row>
                            <br/>
                            <Row>
                            <Container>
                                <Col>
                                    <h1 className='animate__animated animate__fadeInDown' id='welcome'>Welcome to the evanDev React portfolio</h1>
                                    <br></br>
                                    <p className='animate__animated animate__fadeIn' id='para1'>
                                        I am a full-stack developer and graduate of the UNC Charlotte Coding Bootcamp (full-stack web development program) currently seeking new opportunities.
                            <br></br>
                                        <br></br>
                            My top skills include, React.js, Javascript, Node.js, Bootstrap libraries, HTML, CSS, and graphic design as well as REST API (Express, Sequelize, mySQL).
                            <br></br>
                                        <br></br>
                            I have a strong working knowledge of client and server-side integration, and enjoy collaboration as part of a team in an agile environment.
                            <br></br>
                                        <br></br>
                            Please check out some of my applications on my portfolio page and feel free to message me via the contact page or contact me via LinkedIn.
                            <br></br>
                                        <br></br>
                            Thanks for stopping by and have a great day!
                            <br></br>
                                        <br></br>
                            -Evan Bero
                            </p>
                                </Col>
                            </Container>

                        </Row>
                        <Row className="justify-content-md-center">
                            <Image className="justify-content-md-center" id="photo" src={Photo} alt='Photo of Evan Bero' />
                        </Row>
                    </Container>
                </Jumbotron>
            </Container>
        </div>
    )
};

export default AboutComp;