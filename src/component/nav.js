import React, { useContext } from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Dropdown,
    DropdownButton,
    ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modellogin from "./modellogin";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Authcontext } from "./context/auth-context";

export default function Navmenu() {
    const auth = useContext(Authcontext);

    const logout = () => {
        auth.logout();
        window.location.href = "http://localhost:3000";
    }
    const Elogout = () => {
        auth.Elogout();
        window.location.href = "http://localhost:3000";
    }

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/"><h2><b>Offres d'emploi</b></h2> </Navbar.Brand>
            <Nav className="mr-auto">
            <ul style={{listStyle:'none',display:'inline-flex',marginTop:'5%'}}>
            <h5><li style={{marginRight:'15px',textDecoration:'none',marginTop:'5%'}}><Link to="/"><b>Accueil</b></Link></li></h5>
            <h5><li style={{marginRight:'15px',marginTop:'5%'}}><Link to="/entreprises"><b>Entreprise</b></Link></li></h5>
            </ul>
             


              

         
            </Nav>

            {auth.isLoggedIn && (
                <DropdownButton
                    as={ButtonGroup}
                    title="Espace Candidat"
                    id="bg-nested-dropdown"
                >

                    <Dropdown.Item eventKey="1"><Link to={`/mon-cv`}>Créer CV</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="1"><Link to={`/Mes-condidatures`}>Mes condidatures</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={logout}>Se déconnecter</Dropdown.Item>
                </DropdownButton>
            )}
            {auth.isentrprise && (
                <DropdownButton
                    as={ButtonGroup}
                    title="Espace Entreprise"
                    id="bg-nested-dropdown"
                >
                    <Dropdown.Item eventKey="1"><Link to={`/entreprise/profile/${auth.userId}`}>Profile</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="3"><Link to="/entreprise/ajouter-annonce">Ajouter offres</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="3"><Link to={`/entreprise/listeannonces/${auth.userId}`}>Liste d'offres</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={Elogout}>Se déconnecter</Dropdown.Item>

                </DropdownButton>
            )}

            {!auth.isLoggedIn & !auth.isentrprise && (
                <Form inline>
                    <Modellogin></Modellogin>
                </Form>
            )}

            {!auth.isLoggedIn & !auth.isentrprise && (

                <Link to="/entrepriselogin"><h5><b>Je suis une entreprise</b></h5></Link>
            )}
        </Navbar>
    );
}
