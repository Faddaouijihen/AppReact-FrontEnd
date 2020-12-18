import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Spinner, Image, Badge, ListGroup, Modal } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { BrowserRouter, Link, Route } from "react-router-dom";
import ErrorModel from '../model/error-model';
import { useParams } from 'react-router-dom';
import SuccessModel from '../model/success-model'
import { Authcontext } from '../context/auth-context'
import Updateformation from './updateformation'




export default function Formation() {

    const [formations, setformations] = useState();
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const auth = useContext(Authcontext)


    useEffect(() => {
        const sendRequest = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/formation/condidat/${auth.condidatId}`);

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message)
                }


                setformations(responseData.Formation)






            } catch (err) {
                seterror(err.message)

            }
        };

        sendRequest();

    }, []);
    console.log(formations)




    return (
        <div>
            <h2>Mes Formations</h2>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={12}>


                        <ErrorModel error={error} />

                        <SuccessModel success={success} />



                        {formations && formations.map((formation, index) => (
                            <div>
                                <ListGroup.Item>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">

                                            <h5><MDBIcon icon="graduation-cap" className="cyan-text pr-3" />{formation.niveauetude} </h5>

                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">

                                            <h5><MDBIcon icon="scroll" className="cyan-text pr-3" />{formation.diplome} </h5>

                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">

                                            <h5><MDBIcon icon="university" className="cyan-text pr-3" />{formation.universite} </h5>

                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">

                                            <h5><MDBIcon icon="calendar-alt" className="cyan-text pr-3" />De: {formation.dated} </h5>

                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">

                                            <h5><MDBIcon icon="calendar-alt" className="cyan-text pr-3" />À: {formation.datef} </h5>

                                        </Form.Group>
                                    </Form.Row>
                                    
                                    <Updateformation formationid={formation._id} />

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
                                                    let response = await fetch(`http://localhost:5000/api/formation/${formation._id}`, {
                                                        method: 'DELETE',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },

                                                    });
                                                    let responsedata = await response.json();
                                                    if (!response.ok) {
                                                        throw new Error(responsedata.message)
                                                    }
                                                    setformations(formations.filter(form => form._id !== formation._id))
                                                    setsuccess('Formation bien suprimer')





                                                }
                                                catch (err) {
                                                    console.log(err);
                                                    seterror(err.message || 'il y a un probleme');


                                                }
                                                setShow(false)
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





























