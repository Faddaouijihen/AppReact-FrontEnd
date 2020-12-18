import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, ListGroup, Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Authcontext } from '../context/auth-context'


export default function Mescondidature() {

  const [offre, setoffre] = useState();
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);




  const auth = useContext(Authcontext)


  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/condidat/condidature/${auth.condidatId}`);

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message)
        }


        setoffre(responseData.Condidature)






      } catch (err) {
        seterror(err.message)

      }
    };

    sendRequest();

  }, []);
  console.log(offre)

  return (
    <div>
     
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
