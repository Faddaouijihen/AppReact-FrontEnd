import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
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

export default function Register() {


    const classes = useStyles();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [date, setdate] = useState('');
    const [civilite, setcivilite] = useState('');



    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)



    const onChange = (event) => {
        if (event.target.name === "email") {
            setemail(event.target.value)

        } else if (event.target.name === "name") {
            setname(event.target.value)
        } else if (event.target.name === "password") {
            setpassword(event.target.value)
        } else if (event.target.name === "Cpassword") {
            setCpassword(event.target.value)
        } else if (event.target.name === "date") {
            setdate(event.target.value)
        } else if (event.target.name === "civilite") {
            setcivilite(event.target.value)
        }

        console.log(event.target.name)
    }


    const rgisterSubmitHundler = async (event) => {
        event.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(Cpassword)
        console.log(date)
        console.log(civilite)


        if (password === Cpassword) {
            try {

                let response = await fetch('http://localhost:5000/api/condidat/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        date: date,
                        civilite: civilite

                    })
                });
                let responsedata = await response.json();
                if (!response.ok) {
                    throw new Error(responsedata.message)
                }


                setsuccess('Votre compte à été créer')


            } catch (err) {
                seterror(err.message || 'il y a un probleme');

            }



        } else {
            seterror('mot de passe invalide')
        }



    }


    return (
        <div >

            <div style={{ textAlign: "center", marginTop: '20px', marginBottom: '20px' }}>
                <h1 >Inscription</h1>
                <div style={{ display: 'inline-flex', width: '100%' }}>

                </div>
            </div>

            <Container>
                <Row>

                    <Col >
                        <ErrorModel error={error} />
                        <SuccessModel success={success} />
                        <CSSTransition in={true} appear={true} timeout={2000} classNames="slide">


                            <Form onSubmit={rgisterSubmitHundler}>
                                
                            <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Civilité</Form.Label>
                                    <Form.Control
                                        name="civilite"
                                        onChange={onChange}
                                        required
                                        as="select" >
                                        
                                        <option>Mr</option>
                                        <option>Mme</option>
                                        <option>Mlle</option>
                                        
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Nom & Prénom</Form.Label>
                                    <Form.Control
                                        name="name"
                                        onChange={onChange}
                                        required
                                        placeholder="tapez votre nom et prénom" />
                                </Form.Group>

                                <Form.Group controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={onChange}
                                        required
                                        placeholder="tapez votre email" />
                                </Form.Group>


                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password"
                                        name="password"
                                        onChange={onChange}
                                        required
                                        placeholder="tapez votre mot de passe" />
                                </Form.Group>


                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Confirmer Mot de passe</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="Cpassword"
                                        onChange={onChange}
                                        required
                                        placeholder="confirmer votre password" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Date de naissance</Form.Label>
                                    <TextField
                                        id="date"
                                        name="date"
                                        onChange={onChange}
                                        required
                                        type="date"

                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Form.Group>




                                {/* 
                                <Form.Row>
                                    <Form.Group controlId="formGridCity">
                                        <Form.Label>Gouvernorat</Form.Label>
                                        <Form.Control
                                            name="Gouvernorat"
                                            onChange={onChange}
                                            as="select" value="Sélectionnez Civilité...">
                                            <option>Sélectionnez Gouvernorat</option>
                                            <option>Ariana</option>
                                            <option>Béja</option>
                                            <option>Ben Arous</option>
                                            <option>Bizerte</option>
                                            <option>Gabès</option>
                                            <option>Gafsa</option>
                                            <option>Jendouba</option>
                                            <option>Kairouan</option>
                                            <option>kasserine</option>
                                            <option>Kébili</option>
                                            <option>Le Kef</option>
                                            <option>Mahdia</option>
                                            <option>La Manouba</option>
                                            <option>Médenine</option>
                                            <option>Mounastir</option>
                                            <option>Nabeul</option>
                                            <option>Sfax</option>
                                            <option>Sidi Bouzid</option>
                                            <option>Siliana</option>
                                            <option>Sousse</option>
                                            <option>Tataouine</option>
                                            <option>Tozeur</option>
                                            <option>Tunis</option>
                                            <option>Zaghouan</option>


                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Civilité</Form.Label>
                                        <Form.Control
                                            name="Civilité"
                                            onChange={onChange} as="select" value="Sélectionnez Civilité...">
                                            <option>Sélectionnez Civilité</option>
                                            <option>M</option>
                                            <option>Mme</option>
                                            <option>Mlle</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label>Date de naissance</Form.Label>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                name="date"
                                                onChange={onChange}
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </Form.Group>

                                </Form.Row> */}



                                <Button variant="primary" type="submit">
                                    Enregistrer
                                 </Button>
                            </Form>
                        </CSSTransition>

                    </Col>

                </Row>

            </Container>
        </div>
    )

}
