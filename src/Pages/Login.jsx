import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, auth2, provider } from '../Services/firebase'
import { flowersData } from '../Context'
import axios from 'axios'

const Login = () => {

  const { setisLog } = useContext(flowersData)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setisLog(true);
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  const handleLogin2 = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth2, email, password).then((userCredential) => {
      alert('You Are SucessFully Login')
      navigate("/");
    }).catch((err) => alert('Email Or Password Are Wrong'))
  }

  return (
    <>
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
        <input type="submit" onClick={(e) => handleLogin2(e)} value={'Sign In'} className=' btn bg-primary text-light' />
        <hr className='col-6' />
        <GoogleButton onClick={handleLogin} />
        <Link to={'/register'} className='mt-2' >Create An Account</Link>
      </form>

    </>
  )
}

export default Login