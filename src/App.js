import React from "react";
import "./App.css"
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Homes from "./Componet/Pages/Home/Homes";
import Headerss from "./Componet/Header/Headers";
import Foooter from "./Componet/Footer/Footers";
import Aboutss from "./Componet/Pages/About/Abouts";
import Servicess from "./Componet/Pages/Services/Service";
import Coontacts from "./Componet/Pages/Contact/Contacts";
import Contactspage from "./Componet/Pages/Contact/Contacts";

export default function App() {
  return (


    <Router>
      <Headerss/>
        <Switch>
          <Route exact path="/">
            <Homes />
          </Route>
          <Route path="/about">
            <Aboutss />
          </Route>
          <Route path="/services">
            <Servicess />
          </Route>
          <Route path="/contact">
          <Contactspage />
          </Route>
        </Switch>
        <Foooter />
    </Router>
  );
}