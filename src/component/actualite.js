import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './image/logo.svg';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';




export default class Actulite extends React.Component {

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: '20px', marginBottom: '20px' }}>
                <h1 >Actualite</h1>
                <div style={{display:'inline-flex',width:'100%'}}>
                    <Card
                        bg="primary"


                        style={{ width: '50%', height: '250px' }}
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>primary Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card
                        bg="primary"


                        style={{ width: '50%', height: '250px' }}
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>primary Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </div>

        )
    }
}
