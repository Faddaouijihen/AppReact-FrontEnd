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
        const response = await fetch(`http://localhost:5000/api/user`);

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message)
        }


        setoffre(responseData.users)






      } catch (err) {
        seterror(err.message)

      }
    };

    sendRequest();

  }, []);
  console.log(offre)

  return (
    <div style={{marginTop:"70px"}}>
      
      {offre && offre.map((off, index) => (
        <Container>
          <Row>
            <Col>
            </Col>
            <Col xs={10}>
              <ListGroup >
                <ListGroup.Item>
                  <Container>
                   
                    
                    <Row>
                      <Col>
                        <div className="image-projet">
                          <img src={`http://localhost:5000/${off.image}`} style={{ width: '200px', height: '200px' }} />
                        </div>
                      </Col>
                      <Col xs={6}>
                        <Card style={{ width: '38rem', height: '200px', left: '-200px' }}>
                          <Card.Body>
                            <Card.Title>{off.nameEntreprise}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                              <b>{off.siteweb}</b>
                            </Card.Text>
                            <Card.Text>
                              <b>{off.secteurActivite}</b>
                            </Card.Text>
                            <Card.Text>
                              <b>{off.emplacement}</b>
                            </Card.Text>

                            

                      


                          </Card.Body>
                        </Card>

                      </Col>

                    </Row>
                   

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
