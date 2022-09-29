import React, { useContext } from 'react'
import UserContext from './UserContext'
import {useLocation, Navigate} from 'react-router-dom'

export default function RequireAuth({children}) {
   const {isLogin} =useContext(UserContext)
   const { pathname } = useLocation()
  if(isLogin){
    return  children
  }
  return <Navigate to='/login' state={{ from: pathname }} />
}
