import { useState } from "react";
import { signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { useHistory } from 'react-router-dom';
import './SignUp.css';

const SignUp = (props) => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { email, password } = form;

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

    const onSignUp = async (event) => {
      event.preventDefault()
      const { setUser } = props
      try {
        const user = await signUp(form)
        setUser(user)
        history.push('/')

      } catch (error){
        console.log(error)
        setForm({
          email: "",
          password: "",
        })
      }
    }

  
  return (
    <Layout>
      <div className="signup-container">
        <div className = "signup-heading" >Become a member</div>
        <small>Become a Member — design your own style to sell here!</small>
        <form onSubmit={onSignUp}>
          <label className = "signup-label">Email<span className = "signup-label-char">*</span></label>
          <input className = "signup-input" required type='email' name='email' value={email} onChange={handleChange}/>
          <label className = "signup-label">Create a password<span className = "signup-label-char">*</span></label>
          <input className = "signup-input" required name='password' value={password} type='password' onChange={handleChange}/>
          <button className= "signup-button" type="submit">Become a member</button>
        </form>
      </div>
    </Layout>
    
    
  )
}

export default SignUp;