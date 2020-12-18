import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import DatePickers from './date';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Formation extends React.Component {


    render() {
        return (
            <div>


                <Form.Group controlId="formGridState">
                    <Form.Label>Niveau d'étude</Form.Label>
                    <Form.Control as="select" >
                        <option>Sélectionnez Niveau d'étude...</option>
                        <option>Diplôme non validé </option>
                        <option>Bac professionnel, BEP, CAP</option>
                        <option>Xpert, Recherche</option>
                        <option>Doctorat, PHD</option>
                        <option>Ingénieur</option>
                        <option>Licence, Bac + 3</option>
                        <option>Lycée, Niveau Bac</option>
                        <option>Bac non validé</option>
                        <option>Etudiant</option>
                        <option>DUT, BTS, Bac + 2</option>
                        <option>Maitrise, IEP, IUP, Bac + 4</option>
                        <option>DESS, DEA, Master, Bac + 5, Grandes Ecoles</option>
                        <option>Autres</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Diplôme ou spécialité</Form.Label>
                        <Form.Control type="text" placeholder="Diplôme ou spécialité" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Université ou établissement</Form.Label>
                        <Form.Control type="text" placeholder="Université ou établissemen" />
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




            </div>
        )
    }
}
