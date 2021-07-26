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
        <form className="signin-form-container" onSubmit={onSignIn}>
          <label className = "signin-label-email">Email<span className = "signin-label-char">*</span></label>
          <input className = "signin-input-email" required type="text" name="email" value={email} onChange={handleChange} />
          <label className = "signin-label-password">Password<span className = "signin-label-char">*</span></label>
          <input className = "signin-input-password" required type="password" name="password" value={password} onChange={handleChange} />
          <div className="signin-button-container">
            <button className= "signin-button" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </Layout>
    
  )
}

export default SignIn;