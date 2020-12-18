import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './image/logo.svg';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import Carouselhome from './carousel'
import Secteur from './secteur'
import Actualite from './actualite'
import Offre from './offre'


export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Carouselhome />
               <Offre/>



            </div>

        )
    }
}
