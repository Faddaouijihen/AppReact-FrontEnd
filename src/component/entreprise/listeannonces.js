import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card, Spinner, Table, Modal } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from "react-router-dom";
import ErrorModel from '../model/error-model';
import { useParams } from 'react-router-dom';

import SuccessModel from '../model/success-model'




export default function Listeannonces() {

  const [annonces, setannonces] = useState();
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const userid = useParams().uid;


  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/annonce/user/${userid}`);

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message)
        }


        setannonces(responseData.Annonce.annonces)






      } catch (err) {
        seterror(err.message)

      }
    };

    sendRequest();

  }, []);

  console.log(annonces)




  return (
    <div>


      <h1>Liste d'Annonces</h1>
      <Container>
        <Row>
          <Col>
          </Col>
          <Col xs={12}>


            <ErrorModel error={error} />

            <SuccessModel success={success} />



            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>

                  <th>Titre</th>
                  <th>Type de contract</th>
                  <th>Salaire</th>
                  <th>Competence</th>
                  <th>Experience</th>
                  <th>Description</th>

                  <th>Action</th>
                </tr>
              </thead>
              {annonces ? annonces.map((annonce, index) => (
                <tbody>

                  <tr>
                    <td>
                      {index}

                    </td>


                    <td>{annonce.title}</td>

                    <td>

                      {annonce.typeContract}
                    </td>
                    <td>
                      {annonce.salaire}
                    </td>
                    <td>
                      {annonce.competence}
                    </td>
                    <td>
                      {annonce.experience}
                    </td>
                    <td>
                      {annonce.description}
                    </td>
                    <td>
                      <Link to={`/entreprise/annonce/Listcondidat/${annonce.id}`}>
                        <Button variant="primary" style={{ marginRight: '20px' }}>Liste condidat</Button>
                      </Link>

                      <Link to={`/entreprise/update-annonce/${annonce.id}`}>
                        <Button variant="success" style={{ marginRight: '20px' }}>Modifier</Button>
                      </Link>

                      <Button variant="danger" onClick={handleShow}>
                        Supprimer
                                        </Button>
                      <Modal show={show} onHide={handleClose}>

                        <Modal.Body>
                          <Button variant="secondary" onClick={handleClose}>
                            Annuler
                                                </Button>


                          <Button variant="danger" onClick={async (event) => {



                            try {
                              let response = await fetch(`http://localhost:5000/api/annonce/${annonce.id}`, {
                                method: 'DELETE',
                                headers: {
                                  'Content-Type': 'application/json'
                                },

                              });
                              let responsedata = await response.json();
                              if (!response.ok) {
                                throw new Error(responsedata.message)
                              }
                              setannonces(annonces.filter(Annonce => Annonce.id !== annonce.id))
                              setsuccess('Annonce bien suprimer')





                            }
                            catch (err) {
                              console.log(err);
                              seterror(err.message || 'il y a un probleme');


                            }
                          }

                          }>Supprimer</Button>
                        </Modal.Body>

                      </Modal>





                    </td>
                  </tr>




                </tbody>
              )) : <di><Spinner animation="border" /><p>Telechargement...</p></di>}


            </Table>






          </Col>
          <Col>
          </Col>
        </Row>
      </Container>




    </div >
  )

}





























