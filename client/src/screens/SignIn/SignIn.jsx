import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";

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
      <small>Become a Member — design your own style to sell here.</small>
      <form onSubmit={onSignIn}>
        <label>Email*</label>
        <input required type="text" name="email" value={email} onChange={handleChange} />
        <label>Password*</label>
        <input required type="password" name="password" value={password} onChange={handleChange} />
        <button type="submit">SIGN IN</button>
      </form>
    </Layout>
    
  )
}

export default SignIn;