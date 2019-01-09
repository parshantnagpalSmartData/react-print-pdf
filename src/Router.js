import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import Layout3View from './Layout3View'
import RecipeLayoutView from './RecipeLayoutView'




class Router extends Component {
  render(){
    return (
      <BrowserRouter>

      
        <Switch>

          <Route path="/pdf3" exact component={Layout3View} />
          <Route path="/recipe" exact component={RecipeLayoutView} />



        </Switch>

        {/*
        <Link to="/pdf1" >pdf1 view</Link>
        <Link to="/pdf2" >pdf2 view</Link>
        <Link to="/pdf3" >pdf3 view</Link>
        <Link to="/recipe" >recipe view</Link>
        */}


      </BrowserRouter>
    )
  }
}

export { Router };