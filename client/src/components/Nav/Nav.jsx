import "./Nav.css";
import { NavLink } from "react-router-dom";

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/">
      Spend $100+ on e-gift cards, get $10 off!
    </NavLink>
    <NavLink className="link" to="/">
      Free shipping over $25 for members
    </NavLink>
    <NavLink className="link" to="/sign-up">
      Become a Loyalty Member. Join for Free!
    </NavLink>
    <NavLink className="link" id="signin-link" to="/sign-in">
      Already a Member? Sign in!
    </NavLink>
  </>
);

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/">
      Spend $100+ on e-gift cards, get $10 off!
    </NavLink>
    <NavLink className="link" to="/">
      Free shipping over $25 for members
    </NavLink>
    <NavLink className="link" id="signout-link" to="/sign-out">
      Sign Out!
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  console.log(`user: ${user}`);
  return (
    <nav className="nav-container">
      <div className="nav">
        <NavLink className="logo" to="/">
          C&B
        </NavLink>
        <div className="nav-text">
          Up to 60% off
          <br />
          New markdowns added!
          <br />
          Don't miss the best savings of the season!
        </div>
        <div className="nav-links">
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
