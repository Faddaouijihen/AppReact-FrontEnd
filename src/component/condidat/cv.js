import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card, i,Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import Addinfo from './addinfo'
import Addexperience from './addexperience';
import Addformation from './addformation';
import InfoCondidat from './getinfo'
import Expereience from './getexperience'
import Formation from './getformation'




export default function CV() {


    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                        <div style={{marginLeft:'35%'}}>
                        <Addinfo />
                        <Addexperience />
                        <Addformation />

                        </div>
                        
                        <div style={{marginTop:'40px'}}>
                        <Table striped bordered hover>
                            
                            <tbody>
                                <tr>
                                    <td style={{width:'30%'}}>
                                    <InfoCondidat />

                                    </td>
                                    <td>
                                        <Expereience/>
                                        <Formation/>
                                        
                                    </td>
                                 
                                </tr>
             
                            </tbody>
                        </Table>

                        </div>
                       




                    </Col>
                    <Col></Col>
                </Row>

            </Container>
        </div>
    )

}
