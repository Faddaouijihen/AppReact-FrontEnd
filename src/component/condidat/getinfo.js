import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Spinner, Image, Badge } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { BrowserRouter, Link, Route } from "react-router-dom";
import ErrorModel from '../model/error-model';
import { useParams } from 'react-router-dom';
import SuccessModel from '../model/success-model'
import { Authcontext } from '../context/auth-context'
import Updateinfo from './updateinfo'




export default function InfoCondidat() {

    const [infos, setinfos] = useState();
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null);



    const auth = useContext(Authcontext)


    useEffect(() => {
        const sendRequest = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/condidat/${auth.condidatId}`);

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message)
                }


                setinfos(responseData)






            } catch (err) {
                seterror(err.message)

            }
        };

        sendRequest();

    }, []);
    console.log(infos)




    return (
        <div>



            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={12}>


                        <ErrorModel error={error} />

                        <SuccessModel success={success} />



                        {infos &&
                            <div>
                                <Image src={`http://localhost:5000/${infos.Condidat.image}`} roundedCircle style={{ width: '250px', height: '250px' }} />
                                <h2><Badge variant="secondary" >{infos.Condidat.name}</Badge></h2>
                                <h5><MDBIcon icon="envelope" className="cyan-text pr-3" /> {infos.Condidat.email}</h5>
                                <h5><MDBIcon icon="map-marker-alt" className="cyan-text pr-3" /> {infos.Condidat.adresse}, {infos.Condidat.gouvernorat}, {infos.Condidat.codepostal}</h5>
                                <h5><MDBIcon icon="phone-alt" className="cyan-text pr-3" /> {infos.Condidat.telephone}</h5>
                                <h5><MDBIcon icon="tasks" className="cyan-text pr-3" /> {infos.Condidat.competences}</h5>
                                <h5><MDBIcon icon="language" className="cyan-text pr-3" /> {infos.Condidat.langues}</h5>
                                <h5><MDBIcon icon="briefcase" className="cyan-text pr-3" /> {infos.Condidat.typeemploi}</h5>
                                <h5><MDBIcon icon="file-contract" className="cyan-text pr-3" /> {infos.Condidat.typeposte}</h5>
                                <Updateinfo/>
                            </div>

                            
                            

                        }











                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>




        </div >
    )

}





























