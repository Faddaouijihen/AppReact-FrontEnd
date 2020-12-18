import React, { useState, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './component/nav';
import offre from './component/offre';
import Home from './component/home';
import entreprise from './component/entreprise';
import LoginEntreprise from './component/entreprise/loginregister';
import StickyFooter from './component/footer'
import Ajouter_Annonce from './component/entreprise/ajouterannonces'
import Liste_Annonces from './component/entreprise/listeannonces';
import Updateannonce from './component/entreprise/updateannonce';
import Cv from './component/condidat/cv';
import Profile from './component/entreprise/editprofile'
import Dannonces from './component/detailleannonce'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { Authcontext } from './component/context/auth-context';
import { CuseAuth } from './component/hooks/auth-hooks';
import {EuseAuth} from './component/hooks/authE-hooks'
import Mescondidature from './component/condidat/condidature'
import Listcondidat from './component/entreprise/listcondidat'
import CVC from './component/entreprise/cv-condidat'



export default function App() {

  const { Ctoken, login, logout, Condidatid } = CuseAuth();
  const { Etoken, Elogin, Elogout, Entrepriseid  } = EuseAuth()




  let routes;
  if (Ctoken) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/offre" component={offre} />
        <Route path="/Dannoces/:aid" component={Dannonces} />
        <Route path="/entreprises" component={entreprise} />
        <Route path="/mon-cv" component={Cv} />
        <Route path="/Mes-condidatures" component={Mescondidature} />


        

      </React.Fragment>)
  } else if (Etoken) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/offre" component={offre} />
        <Route path="/Dannoces/:aid" component={Dannonces} />
        <Route path="/entreprises" component={entreprise} />
        <Route path="/entreprise/ajouter-annonce" component={Ajouter_Annonce} />
        <Route path="/entreprise/listeannonces/:uid" component={Liste_Annonces} />
        <Route path="/entreprise/update-annonce/:aid" component={Updateannonce} />
        <Route path="/entreprise/profile/:uid" component={Profile} />
        <Route path="/entreprise/annonce/Listcondidat/:aid" component={Listcondidat} />
        <Route path="/CV-condidat/:cid" component={CVC} />

        

      </React.Fragment>)

  }
  else {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        
        <Route path="/entreprises" component={entreprise} />
        <Route path="/entrepriselogin" component={LoginEntreprise} />
        <Route path="/offre" component={offre} />
        <Route path="/Dannoces/:aid" component={Dannonces} />
        

      </React.Fragment>
    )
  }


  return (
    <div>
      <Authcontext.Provider value={{
        isLoggedIn: !!Ctoken,
        condidatId: Condidatid,
        Ctoken: Ctoken,
        login: login,
        logout: logout,
        isentrprise: !!Etoken,
        Etoken: Etoken,
        userId: Entrepriseid,
        loginentreprise: Elogin,
        Elogout:Elogout
      
      }}>
        <BrowserRouter>
          <Navmenu></Navmenu>


          {routes}
          <StickyFooter></StickyFooter>


        </BrowserRouter>
      </Authcontext.Provider>

    </div>
  )

}