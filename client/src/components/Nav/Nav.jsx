import './Nav.css'
import { NavLink } from 'react-router-dom';

const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-up">Become a Loyalty Member. Join for Free!</NavLink>
      <NavLink className="link" to="/sign-in">Already a Member? Sign in!</NavLink>
  </>
)

const authenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-out">Sign Out!</NavLink>
  </>
)

const Nav = ({ user }) => {
  console.log(`user: ${user}`)
    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">CB</NavLink>
                <div className="nav-links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                <div className="nav-text">
                  Up to 60% off
                  New markdowns added!
                  Don't miss the best savings of the season!
                </div>
            </div>
        </nav>
    )
}

export default Nav