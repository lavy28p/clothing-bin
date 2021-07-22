import React from 'react';
import './App.css';
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import DetailProduct from './screens/DetailProduct/DetailProduct';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/products">
          <Products/>
        </Route>
        <Route path = "/products/:id">
          <DetailProduct/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
