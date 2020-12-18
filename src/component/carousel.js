import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import SarraIMG from './image/caca.jpg'
import danielIMG from './image/abab.jpg'
import HHH from './image/645.jpg'


export default class Carouselhome extends React.Component {

    render() {
        return (


            <div>


                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SarraIMG}
                            width={100}
                            height={350}
                            alt="First slide"
                        />
                        <Carousel.Caption>
        
                        < h1 > Trouvez le Job de vos rêves !</h1>
                        <p><h2>Chercher des offres d'emploi</h2></p>
    
                        </Carousel.Caption>
                    </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={danielIMG}
                        width={100}
                        height={350}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Trouvez le Job de vos rêves !</h1>
                        <p><h2>Chercher des offres d'emploi</h2></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={HHH}
                        width={100}
                        height={350}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Trouvez le Job de vos rêves !</h1>
                        <p><h2>Chercher des offres d'emploi</h2></p>
                    </Carousel.Caption>
                </Carousel.Item>

                </Carousel>
            </div >





        )
    }
}
