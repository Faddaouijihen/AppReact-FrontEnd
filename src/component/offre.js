import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './experience'
import Formation from './formation'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, ListGroup, Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from "react-router-dom";


export default function Offre() {

  const [offre, setoffre] = useState();
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);





  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/annonce`);

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message)
        }


        setoffre(responseData.Annonce)






      } catch (err) {
        seterror(err.message)

      }
    };

    sendRequest();

  }, []);
  console.log(offre)

  return (
    <div style={{ marginTop: "70px" }}>

   <center><h1><b>Les offres d'emploi</b></h1></center>
      {offre && offre.map((off, index) => (
        <Container>
          <Row>

            <Col>
            </Col>
            <Col xs={10}>
              <ListGroup >
                <ListGroup.Item>
                  <Container>
                    <Link to={`/Dannoces/${off._id}`}>

                      <Row>
                        <Col>
                          <div className="image-projet">
                            <img src={`http://localhost:5000/${off.nameE}`} style={{ width: '200px', height: '200px' }} />
                          </div>
                        </Col>
                        <Col xs={6}>
                          <Card style={{ width: '38rem', height: '200px', left: '-200px' }}>
                            <Card.Body>
                              <Card.Title>{off.title}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                              <Card.Text>
                                {off.typeContract}
                              </Card.Text>

                            </Card.Body>
                          </Card>

                        </Col>

                      </Row>
                    </Link>

                  </Container>
                </ListGroup.Item>



              </ListGroup>
            </Col>
            <Col>

            </Col>
          </Row>

        </Container>

      ))


      }
    </div>
  )

}
