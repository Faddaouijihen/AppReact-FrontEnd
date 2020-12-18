import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './image/logo.svg';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';




export default class Secteur extends React.Component {

    render() {
        return (
            <div>
               

            <Container fluid>
           
                <h1 className="secteur"><b>Les offres d'emploi</b></h1>
                <Row>
                    <Col> <Card style={{ width: '18rem',marginLeft:'100px' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>centre d'appel</Card.Title>
                               
                                <Button variant="primary">Decouvrir</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col> <Card style={{ width: '18rem',marginLeft:'100px' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>industrie</Card.Title>
                             
                                <Button variant="primary">Decouvrir</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col> <Card style={{ width: '18rem',marginLeft:'100px' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>technologie</Card.Title>
                               
                                <Button variant="primary">Decouvrir</Button>
                            </Card.Body>
                        </Card></Col>
                </Row>

            </Container>
            </div>

        )
    }
}
