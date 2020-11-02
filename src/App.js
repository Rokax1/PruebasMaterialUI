import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles'
import NavBar from './components/navbar'
import theme from './style/themeConfig';
import Typography from '@material-ui/core/Typography';
import Lista from './components/lista';
import Hidden from './components/hidden';
import Crud from './components/ReactHooks/Crud';
import Ejemplos from './components/ReactHooks/PrimeroEjemplos';
import Contacto from './components/Rutas/contacto';
import Nosotros from './components/Rutas/nosotros';
import Inicio from './components/Rutas/Inicio';





function App() {

  return (
    <Router>
      <Fragment>
        <div className="container">
          <h1> Router       </h1>
          <hr></hr>
        <Link to="/" className="btn btn-primary" activeClassName="active">
        inicio
        
        </Link>
        <Link to="/contacto" className="btn btn-primary" activeClassName="active">
        contacto
        
        </Link>
        <NavLink to="/nosotros" className="btn btn-primary" activeClassName="active">
        
        nosotros
        </NavLink>



          <Switch>
            <Route path="/contacto" exact>
              <Contacto />
            </Route>
            <Route path="/nosotros" exact>
              <Nosotros />
            </Route>
            <Route path="/" exact>
              <Inicio />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}


export default App;
