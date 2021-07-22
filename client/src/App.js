import React from 'react';
import './App.css';
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/products">
          <Products/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
