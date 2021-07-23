import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import './SignIn.css';

const SignIn = (props) => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { email, password } = form

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({ email: '', password: '',})
    }
  }

  return(
    <Layout user={props.user}>
      <div className="signin-container">
        <div className = "signin-heading" >Sign in</div>
        <small>Become a Member — design your own style to sell here.</small>
        <form onSubmit={onSignIn}>
          <label className = "signin-label">Email<span className = "signin-label-char">*</span></label>
          <input className = "signin-input" required type="text" name="email" value={email} onChange={handleChange} />
          <label className = "signup-label">Password<span className = "signin-label-char">*</span></label>
          <input className = "signin-input" required type="password" name="password" value={password} onChange={handleChange} />
          <button className= "signin-button" type="submit">SIGN IN</button>
        </form>
      </div>
    </Layout>
    
  )
}

export default SignIn;