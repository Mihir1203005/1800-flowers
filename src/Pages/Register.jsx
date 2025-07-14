import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleDummyRegister = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      alert("Please fill all fields")
    } else {
      // Dummy logic — in real apps, use API/backend to register users
      alert("You are successfully registered (mock)")
      navigate('/login')
    }
  }

  return (
    <form className='col-12 d-flex flex-column align-items-center mt-4'>
      <h1>Register</h1>

      <div className='col-lg-3 col-md-5 col-sm-6 col-10 mt-3'>
        <span>E-mail:</span><br />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='col-12 p-2' />
      </div>

      <div className='col-lg-3 col-md-5 col-sm-6 col-10 mt-3'>
        <span>Password:</span><br />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='col-12 p-2' />
      </div>

      <input
        type="submit"
        onClick={handleDummyRegister}
        value="Sign Up"
        className='btn bg-primary text-light mt-4'
      />
    </form>
  )
}

export default Register
