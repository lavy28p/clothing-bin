import { useState, useEffect } from 'react'
import './App.css';
import Home from "./screens/Home/Home";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Products from "./screens/Products/Products";
import DetailProduct from './screens/DetailProduct/DetailProduct';
import EditProduct from './screens/EditProduct/EditProduct';
import SignOut from "./screens/SignOut/SignOut";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from './services/users'

function App() {
  const [user, setUser] = useState(null)

  useEffect (() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home user={user}/>
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser}/>
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser}/>
        </Route>
        <Route exact path = "/products">
          <Products user={user}/>
        </Route>
        <Route exact path = "/products/:id">
          <DetailProduct/>
        </Route>
        <Route path="/products/:id/edit">
          {user ? <EditProduct user={user} /> : <Redirect to='/' />}
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
