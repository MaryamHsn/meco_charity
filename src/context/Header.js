import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import UserContext from './UserContext' 

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <UserContext.Consumer  >
      {({isLogin,user,logout})=>(
          <div className='header'>
          <button className='btn-login' >
            {isLogin?<span  onClick={logout}> خروج</span> : 
            // <span  onClick={login}>ورود</span>
            <Link to='/login'>ورود</Link>}
          </button>
          <div>
          {isLogin && <span className='show-name'>{user.name}</span> }
          </div>
          
        </div>
       )}
        </UserContext.Consumer> 
      </div>
    )
  }
}
 