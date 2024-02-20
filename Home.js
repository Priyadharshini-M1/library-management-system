import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const handleDT = () =>{
    navigate('/UserLogin')
  }
  const handleIT = () =>{
    navigate('/AdminLogin')
  }
  return (
    <div className='indexpage'>
        <div className='index'>
            <h1 className='head'>LOGIN HERE</h1>
            <button className='IT' onClick={handleIT}>Admin</button>
            <button className='DT' onClick={handleDT}>User</button>
        </div>
    </div>
  )
}

export default Login