import React, { useContext } from 'react'
import UserContext from './UserContext'
import {Navigate, useLocation} from 'react-router-dom' 

export default function Login() {
    const {login,isLogin} = useContext(UserContext)
    const location = useLocation()


    if(isLogin){
       return <Navigate to={location.state?.from || '/'}></Navigate>
    }

  return (
    <div className='box'>
        <table>
          <tbody>
          <tr>
          <td><label >نام کاربری:</label></td>
          <td><input type='text' className='input-form' placeholder='نام کاربری'></input></td>
          </tr>
          <tr>
            <td><label>رمز عبور:</label></td>
            <td><input type='number' className='input-form'  placeholder='رمز عبور'></input></td>
          </tr>
          </tbody>
          </table>
         
        <button className='btn-login-form' onClick={login}>ورود</button>
        {/* <button onClick={loginCallback}>Login</button> */}
     
    </div>
  )
}
