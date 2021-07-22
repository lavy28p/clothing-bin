import { useState } from "react";
import { signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { useHistory } from 'react-router-dom';

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
      <div className="form-container">
        <h2>BECOME A MEMBER</h2>
        <small>Become a Member — design your own style to sell here.</small>
        <form onSubmit={onSignUp}>
          <label>Email*</label>
          <input required type='email' name='email' value={email} onChange={handleChange}/>
          <label>Create a password*</label>
          <input required name='password' value={password} type='password' onChange={handleChange}/>
          <button type="submit">BECOME A MEMBER</button>
        </form>
      </div>
    </Layout>
    
    
  )
}

export default SignUp;