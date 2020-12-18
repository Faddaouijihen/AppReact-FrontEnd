import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card, Modal } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'
import { Authcontext } from '../context/auth-context'
import ErrorModel from '../model/error-model';
import SuccessModel from '../model/success-model';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function MyVerticallyCenteredModal(props) {
    const classes = useStyles();

    const [lieu, setlieu] = useState('');
    const [description, setdescription] = useState('');
    const [entreprise, setentreprise] = useState('');
    const [datedebut, setdatedebut] = useState('');
    const [datefin, setdatefin] = useState('');
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);

    const onChange = (event) => {
        if (event.target.name === "lieu") {
            setlieu(event.target.value)

        } else if (event.target.name === "description") {
            setdescription(event.target.value)
        } else if (event.target.name === "entreprise") {
            setentreprise(event.target.value)
        } else if (event.target.name === "dateD") {
            setdatedebut(event.target.value)
        } else if (event.target.name === "dateF") {
            setdatefin(event.target.value)
            console.log(event.target.name)
        }
    }

    const auth = useContext(Authcontext)

    const ajoutSubmithundler = async event => {
        event.preventDefault();
        console.log(lieu)
        console.log(description)
        console.log(entreprise)
        console.log(datefin)
        console.log(datedebut)
        console.log(auth.condidatId)


         try {
            let response = await fetch(`http://localhost:5000/api/experience`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    lieu: lieu,
                    description: description,
                    entreprise: entreprise,
                    datedebut: datedebut,
                    datefin: datefin,
                    creator: auth.condidatId
                })
            });
            let responsedata = await response.json();
            if (!response.ok) {
                throw new Error(responsedata.message)
            }
            setsuccess('Vos experiences sont ajouter')



            console.log(responsedata)
            window.location.href = "http://localhost:3000/mon-cv";
        }
        catch (err) {
            console.log(err);

            seterror(err.message || 'probleme!!')

        } 
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ajouter expériences
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>formulaire d'ajout expérience</h4>
                <ErrorModel error={error} />
                <SuccessModel success={success} />
                <Form onSubmit={ajoutSubmithundler}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Lieu</Form.Label>
                            <Form.Control type="text" placeholder="Lieu"
                                name="lieu"
                                onChange={onChange}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Entreprise</Form.Label>
                            <Form.Control type="text" placeholder="Entreprise"
                                name="entreprise"
                                onChange={onChange}
                                required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>De</Form.Label>
                            <TextField
                                id="date"
                                name="dateD"
                                onChange={onChange}
                                required
                                type="date"

                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>À</Form.Label>
                            <TextField
                                id="date"
                                name="dateF"
                                onChange={onChange}
                                required
                                type="date"

                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="6"
                            name="description"
                            onChange={onChange}
                            required />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Ajouter
                    </Button>
                </Form>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default function Addexperience() {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>


            <Link><MDBIcon icon="briefcase" size="5x" className="indigo-text pr-3" onClick={() => setModalShow(true)} /> </Link>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

