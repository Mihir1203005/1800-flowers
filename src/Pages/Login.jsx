import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { flowersData } from '../Context'

const Login = () => {
  const { setisLog } = useContext(flowersData)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleDummyLogin = (e) => {
    e.preventDefault()

    // Dummy Check — you can add custom logic or API here if needed
    if (email && password) {
      alert('Login successful (mock)');
      setisLog(true);
      navigate('/');
    } else {
      alert('Please enter email and password');
    }
  }

  return (
    <form className='col-12 d-flex flex-column align-items-center mt-4'>
      <h1>Sign In</h1>
      <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
        <span>E-mail:</span><br />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='col-12 p-2' />
      </div>
      <br />
      <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
        <span>Password:</span><br />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='col-12 p-2' />
      </div>
      <br />
      <input type="submit" onClick={handleDummyLogin} value={'Sign In'} className='btn bg-primary text-light' />
      <hr className='col-6' />
      <Link to={'/register'} className='mt-2'>Create An Account</Link>
    </form>
  )
}

export default Login
