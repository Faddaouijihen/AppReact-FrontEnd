import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import { Authcontext } from '../context/auth-context';
import ErrorModel from '../model/error-model'
import SuccessModel from '../model/success-model'
import { useParams, Redirect, Link } from 'react-router-dom'





export default function Updateannonce() {

    const [title, settitle] = useState('');
    const [salaire, setsalaire] = useState('');
    const [Tcontrat, setTcontrat] = useState('');
    const [competence, setcompetence] = useState('');
    const [experience, setexperience] = useState('');
    const [description, setdescription] = useState('');
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null);

    const onChange = (event) => {
        if (event.target.name === "title") {
            settitle(event.target.value)
        } else if (event.target.name === "salaire") {
            setsalaire(event.target.value)
        } else if (event.target.name === "Tcontrat") {
            setTcontrat(event.target.value)
        } else if (event.target.name === "description") {
            setdescription(event.target.value)
        } else if (event.target.name === "competence") {
            setcompetence(event.target.value)
        } else
            setexperience(event.target.value)
        console.log(event.target.name)

    }

    const annonceid = useParams().aid;
    const updateSubmithundler = async event => {
        event.preventDefault();


        console.log(title)
        console.log(salaire)
        console.log(Tcontrat)
        console.log(description)
        console.log(competence)
        console.log(experience)



        try {
            let response = await fetch(`http://localhost:5000/api/annonce/${annonceid}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    salaire: salaire,
                    typeContract: Tcontrat,
                    description: description,
                    competence: competence,
                    experience: experience

                })
            });

            let responsedata = await response.json();
            if (!response.ok) {
                throw new Error(responsedata.message)
            }

            setsuccess('Modification valider')
            settitle('')
            setTcontrat('')
            setsalaire('')
            setdescription('')
            setcompetence('')
            setexperience('')





            console.log(responsedata)
        }
        catch (err) {
            console.log(err);

            seterror(err.message || 'probleme!!')

        }
    }







    const auth = useContext(Authcontext);


    return (
        <div>


            <h1>Update Annonces</h1>


            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <ErrorModel error={error} />
                        <SuccessModel success={success} />


                        <Form onSubmit={updateSubmithundler}>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    value={title}
                                    type="text"
                                    name="title"
                                    onChange={onChange}
                                    placeholder="Title du poste"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Salaire</Form.Label>
                                <Form.Control
                                    name="salaire"
                                    value={salaire}
                                    onChange={onChange}
                                    type="text"
                                    placeholder="Salaire du poste"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Type Contract</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={Tcontrat}
                                    name="Tcontrat"
                                    onChange={onChange}
                                    placeholder="Type de contract"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Expériences demandées</Form.Label>
                                <Form.Control
                                    name="experience"
                                    onChange={onChange}
                                    required
                                    as="select" >

                                    <option>Débutant</option>
                                    <option>0 à 1 an</option>
                                    <option>1 à 3 ans</option>
                                    <option>3 à 5 ans</option>
                                    <option>5 à 10 ans</option>
                                    <option>plus 10 ans</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Compétences demandées</Form.Label>
                                <Form.Control
                                    name="competence"
                                    onChange={onChange}
                                    as="textarea"
                                    rows="6"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={description}
                                    onChange={onChange}
                                    as="textarea"
                                    rows="6"
                                    required />
                            </Form.Group>



                            <Button variant="primary" type="submit">Metre a jour </Button>
                        </Form>

                    </Col>




                    <Col></Col>
                </Row>

            </Container>



        </div >
    )

}