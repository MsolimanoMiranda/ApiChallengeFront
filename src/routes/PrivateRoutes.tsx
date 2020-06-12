import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../scenes/home";

import { Redirect } from 'react-router-dom';



export default function Routes() {

  return (
    <BrowserRouter>

      <Switch>
       {/*<Route path="/" exact component={TallerSearch} >{ validarToken() ? <TallerSearch/> : <Redirect to='/TallerNoFound' />}</Route>*/}
        <Route path="/" exact component={Home} />
     
      </Switch>
      
    </BrowserRouter>
  );
}
