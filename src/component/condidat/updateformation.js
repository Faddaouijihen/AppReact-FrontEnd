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


    const [niveauetude, setniveauetude] = useState('');
    const [diplome, setdiplome] = useState('');
    const [universite, setuniversite] = useState('');
    const [dateD, setdateD] = useState('');
    const [dateF, setdateF] = useState('');
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);

    const onChange = (event) => {
        if (event.target.name === "niveauetude") {
            setniveauetude(event.target.value)

        } else if (event.target.name === "diplome") {
            setdiplome(event.target.value)
        } else if (event.target.name === "universite") {
            setuniversite(event.target.value)
        } else if (event.target.name === "dateD") {
            setdateD(event.target.value)
        } else if (event.target.name === "dateF") {
            setdateF(event.target.value)
            console.log(event.target.name)
        }
    }

    const auth = useContext(Authcontext)
    const formationid = props.formationid
    

    const ajoutSubmithundler = async event => {
        event.preventDefault();
        console.log(niveauetude)
        console.log(diplome)
        console.log(universite)
        console.log(dateD)
        console.log(dateF)
        
        console.log(auth.condidatId)
        console.log(props.formationid)



        try {
            let response = await fetch(`http://localhost:5000/api/formation/${formationid}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    niveauetude: niveauetude,
                    diplome: diplome,
                    universite: universite,
                    dated: dateD,
                    datef: dateF,
                })
            });
            let responsedata = await response.json();
            if (!response.ok) {
                throw new Error(responsedata.message)
            }
            setsuccess('Vos formation est mis à jour')



            console.log(responsedata)
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
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>formulaire d'ajout formation</h4>
                <ErrorModel error={error} />
                <SuccessModel success={success} />
                <Form onSubmit={ajoutSubmithundler}>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Niveau d'étude</Form.Label>
                        <Form.Control as="select"
                            name="niveauetude"
                            onChange={onChange}
                            required >
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
                            <Form.Control type="text" placeholder="Diplôme ou spécialité"
                                name="diplome"
                                onChange={onChange}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Université ou établissement</Form.Label>
                            <Form.Control type="text" placeholder="Université ou établissemen"
                                name="universite"
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
                                type="date"
                                onChange={onChange}
                                required

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
                                type="date"
                                onChange={onChange}
                                required
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Form.Group>
                    </Form.Row>
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

export default function Updateformation(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const id = props.formationid
    console.log(id)

    return (
        <>


       
            <Button variant="success" id={id} onClick={() => setModalShow(true)}>Modifier</Button>

            <MyVerticallyCenteredModal
                formationid={id}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}