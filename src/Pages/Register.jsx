import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { flowersData } from '../Context'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth2 } from '../Services/firebase'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  const handleLogin2 = (e) => {
    e.preventDefault()

    if (password == '' || email == '') {
      alert("Feil All Fields")
    }

    createUserWithEmailAndPassword(auth2, email, password).then((userCredential) => {
      alert('You Are SucessFully Login')
      navigate("/");
      console.log(userCredential)
    }).catch((err) => alert('User Already Exist'))
  }
  return (
    <>
      <form className='col-12 d-flex flex-column align-items-center mt-4'>
        <h1>Register</h1>

        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>E-mail:</span><br />
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='col-12 p-2' />
        </div>
        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>Password:</span><br />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='col-12 p-2' />
        </div>
        <input type="submit" onClick={(e) => handleLogin2(e)} value={'Sign Up'} className=' btn bg-primary text-light mt-3' />
      </form>
    </>
  )
}

export default Register