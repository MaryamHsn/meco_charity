import React, { Component } from 'react'
import UserContext from './UserContext' 

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <UserContext.Consumer  >
      {({isLogin,user,login,logout})=>(
          <div className='header'>
          <button className='btn-login' >
            {isLogin?<span  onClick={logout}> خروج</span> : <span  onClick={login}>ورود</span>}
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
 