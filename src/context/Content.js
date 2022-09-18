import React, { Component, useContext } from 'react'
import UserContext from './UserContext'

export default function Content() {
  const {isLogin,user} = useContext(UserContext);
  return (
    <div className='box'>
      {isLogin && <span>welcome  {  user.name}</span>}
      <div>hello</div>
    </div>
  )
} 