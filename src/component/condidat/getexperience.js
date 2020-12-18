import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Spinner, Image, Badge, ListGroup, Modal } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { BrowserRouter, Link, Route } from "react-router-dom";
import ErrorModel from '../model/error-model';
import { useParams } from 'react-router-dom';
import SuccessModel from '../model/success-model'
import { Authcontext } from '../context/auth-context'
import Updateexperience from './updateexp'




export default function Experience() {

    const [experiences, setexperiences] = useState();
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const auth = useContext(Authcontext)


    useEffect(() => {
        const sendRequest = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/experience/condidat/${auth.condidatId}`);

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message)
                }


                setexperiences(responseData.Experience)






            } catch (err) {
                seterror(err.message)

            }
        };

        sendRequest();

    }, []);
    console.log(experiences)




    return (
        <div>
            <h2>Mes experiences</h2>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={12}>


                        <ErrorModel error={error} />

                        <SuccessModel success={success} />



                        {experiences && experiences.map((experience, index) => (
                            <div>
                                <ListGroup.Item>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">

                                            <h5><MDBIcon icon="align-justify" className="cyan-text pr-3" />{experience.description} </h5>

                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">

                                            <h5><MDBIcon icon="map-marker-alt" className="cyan-text pr-3" />{experience.lieu} </h5>

                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">

                                            <h5><MDBIcon icon="calendar-alt" className="cyan-text pr-3" />De: {experience.datedebut} </h5>

                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">

                                            <h5><MDBIcon icon="calendar-alt" className="cyan-text pr-3" />À: {experience.datefin} </h5>

                                        </Form.Group>
                                    </Form.Row>
                                    <Updateexperience expid={experience._id} />

                                    <Button variant="primary" onClick={handleShow}>
                                        Supprimer
                                        </Button>
                                    <Modal show={show} onHide={handleClose}>

                                        <Modal.Body>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Annuler
                                                </Button>


                                            <Button variant="danger" onClick={async (event) => {



                                                try {
                                                    let response = await fetch(`http://localhost:5000/api/experience/${experience._id}`, {
                                                        method: 'DELETE',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },

                                                    });
                                                    let responsedata = await response.json();
                                                    if (!response.ok) {
                                                        throw new Error(responsedata.message)
                                                    }
                                                    setexperiences(experiences.filter(Exp => Exp._id !== experience._id))
                                                    setsuccess('Experience bien suprimer')





                                                }
                                                catch (err) {
                                                    console.log(err);
                                                    seterror(err.message || 'il y a un probleme');


                                                }
                                            }

                                            }


                                            >Supprimer</Button>
                                        </Modal.Body>

                                    </Modal>
                                </ListGroup.Item>






                            </div>

                        ))


                        }











                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>




        </div >
    )

}





























