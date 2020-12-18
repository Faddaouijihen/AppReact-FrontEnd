import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import DatePickers from './date';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Experience extends React.Component {

    render() {
        return (
            <div>


                

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Lieu</Form.Label>
                        <Form.Control type="text" placeholder="Lieu" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Entreprise</Form.Label>
                        <Form.Control type="text" placeholder="Entreprise" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>De</Form.Label>
                        <DatePickers></DatePickers>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>À</Form.Label>
                        <DatePickers></DatePickers>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="6" />
                </Form.Group>
                
                


            </div>
        )
    }
}
