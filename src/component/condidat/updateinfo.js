import React, { useState, useContext, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card, Modal, Image } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'
import { Authcontext } from '../context/auth-context'
import avatar from '../image/avatar.png'
import ErrorModel from '../model/error-model';
import SuccessModel from '../model/success-model';
import axios from 'axios'



function MyVerticallyCenteredModal(props) {


  const [File, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!File) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(File);
  }, [File]);
  console.log(previewUrl)

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    /* props.onInput(props.id, pickedFile, fileIsValid); */
  };

  const pickImageHandler = (event) => {
    filePickerRef.current.click();

  };


  const [typeposte, settypeposte] = useState('');
  const [typeemploi, settypeemploi] = useState('');
  const [categories, setcategories] = useState('');
  const [objectifs, setobjectifs] = useState('');
  const [competences, setcompetences] = useState('');
  const [langues, setlangues] = useState('');
  const [adresse, setadresse] = useState('');
  const [codepostal, setcodepostal] = useState('');
  const [gouvernorat, setgouvernorat] = useState('');
  const [telephone, settelephone] = useState('');
  const [error, seterror] = useState(false)
  const [success, setsuccess] = useState(false)


  const onChange = (event) => {
    if (event.target.name === "typeposte") {
      settypeposte(event.target.value)

    } else if (event.target.name === "typeemploi") {
      settypeemploi(event.target.value)
    } else if (event.target.name === "categories") {
      setcategories(event.target.value)
    } else if (event.target.name === "objectifs") {
      setobjectifs(event.target.value)
    }
    else if (event.target.name === "competences") {
      setcompetences(event.target.value)
    } else if (event.target.name === "langues") {
      setlangues(event.target.value)
    }
    else if (event.target.name === "adresse") {
      setadresse(event.target.value)
    } else if (event.target.name === "codepostal") {
      setcodepostal(event.target.value)
    }
    else if (event.target.name === "gouvernorat") {
      setgouvernorat(event.target.value)
    } else if (event.target.name === "telephone") {
      settelephone(event.target.value)
    }


    console.log(event.target.name)
  }

  const auth = useContext(Authcontext)

  const ajoutSubmithundler = async event => {
    event.preventDefault();



    try {
      const formData = new FormData();

      formData.append('image', File);
      formData.append('typeposte', typeposte);
      formData.append('typeemploi', typeemploi);
      formData.append('categories', categories);
      formData.append('objectifs', objectifs);
      formData.append('competences', competences);
      formData.append('langues', langues);
      formData.append('adresse', adresse);
      formData.append('codepostal', codepostal);
      formData.append('gouvernorat', gouvernorat);
      formData.append('telephone', telephone);


      await axios.patch(`http://localhost:5000/api/condidat/info/${auth.condidatId}`, formData)

      setsuccess('Votre compte est bien cree')


    } catch (err) {
      seterror(err.message || 'il y a un probleme');

    }


  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <h4>Info personel</h4>
        <ErrorModel error={error} />
        <SuccessModel success={success} />

        <Form onSubmit={ajoutSubmithundler}>
          <div style={{ width: '50%', marginBottom: '30px', marginTop: '20px' }}>
            <input

              ref={filePickerRef}
              style={{ display: 'none' }}
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={pickedHandler}
            />
            <div >

              {previewUrl && <Image src={previewUrl} alt="Preview" rounded style={{ width: '100%', height: '100%' }} />}
              {!previewUrl && <Image src={avatar} alt="Preview" rounded style={{ width: '100%', height: '100%' }} />}


              <Button type="button" variant="primary" onClick={pickImageHandler} style={{ marginTop: '20px' }}>
                PICK IMAGE
              </Button>
            </div>
            {!isValid && <p></p>}
          </div>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Titre du poste désiré</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titre du poste désiré"
              name="typeposte"
              onChange={onChange}
              required />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Type d'emploi désiré </Form.Label>

              <Form.Control as="select"
                name="typeemploi"
                onChange={onChange}
                required >

                <option>CDI</option>
                <option>CDD</option>
                <option>temps plein</option>
                <option>temps partiel</option>
                <option>freelance/Indépendant</option>
                <option>Intérim</option>
                <option>Saisonnier</option>
                <option>Contrat al karama</option>
                <option>SIVP</option>

              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Catégories</Form.Label>
              <Form.Control as="select"
                name="categories"
                onChange={onChange}
                required>

                <option>Achat-Approvisionnement</option>
                <option>Administration</option>
                <option>Agriculture</option>
                <option>Agroalimentaire</option>
                <option>Aide Humanitaire et Protection civile</option>
                <option>Architecture d'Intérieur</option>

              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Objectifs</Form.Label>
            <Form.Control as="textarea" rows="6"
              name="objectifs"
              onChange={onChange}
              required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Compétences</Form.Label>
            <Form.Control as="textarea" rows="6"
              name="competences"
              onChange={onChange}
              required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Langues</Form.Label>
            <Form.Control as="textarea" rows="6"
              name="langues"
              onChange={onChange}
              required />
          </Form.Group>



          <Form.Group controlId="formGridAddress1">
            <Form.Label>Addresse</Form.Label>
            <Form.Control
              placeholder="Addresse"
              name="adresse"
              onChange={onChange}
              required />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>code postale</Form.Label>
            <Form.Control placeholder="code postale"
              name="codepostal"
              onChange={onChange}
              required />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Gouvernerat</Form.Label>
            <Form.Control
              name="gouvernorat"
              onChange={onChange}
              required
              as="select" >
              <option>Choose...</option>
              <option>Débutant</option>
              <option>0 à 1 an</option>
              <option>1 à 3 ans</option>
              <option>3 à 5 ans</option>
              <option>5 à 10 ans</option>
              <option>plus 10 ans</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Telephone</Form.Label>
            <Form.Control placeholder="Telephone"
              name="telephone"
              onChange={onChange}
              required />
          </Form.Group>
          <Button variant="dark" type="submit">
            Ajouter
          </Button>

        </Form>




      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Updateinfo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>


      <Link>
        
        <Button variant="success" onClick={() => setModalShow(true)}>Modifier</Button>

      </Link>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}