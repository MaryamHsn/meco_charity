import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Loan from './context/Loan/Loan'
import Loans from './context/Loan/Loans'
import Content from './context/Content'
import Transactions from './context/Bank/Transactions'
import Transaction from './context/Bank/Transaction'
import Participant from './context/Participant/Participant'
import Header from './context/Header'
import Sidebar from './context/Sidebar'
import File from './context/File/File'
import './context/Style.css';
import UserContext from './context/UserContext';
import  {setToken,getToken,removeToken} from './context/Utils'
import  request from './context/request';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FileInformations from './context/FileInfornations';
import Page404 from './context/Page404';
import FileInformation from './context/FileInformation'
import Login from './context/Login';
import RequireAuth from './context/RequireAuth'

function App() {
  const [isLogin,setIsLoggin]=useState(true);
  // const [isLogin,setIsLoggin]=useState(false);
  const [user,setUser]=useState({});
  useEffect(()=>{
    const tok=getToken() 
    if(tok){
      getUser();
    }
  },[])
  function login(){
      request('/users/2').then(response=>{
        setUser(response.data)
        setIsLoggin(true)
      setToken(response.data.email)
      })
    //   setUser({id:1 , name:'mary' ,family:'hsn' , token:'123'})
    //   setIsLoggin(true)
    // setToken('123')
  }
  function getUser(){
    request('/users/2')
    .then(response=>{
      setUser(response.data)
      setIsLoggin(true)}) 
    // setUser({id:1 , name:'mary' ,family:'hsn' , token:'123'})
    // setIsLoggin(true)

  }
  function logout(){
    setUser({});
    setIsLoggin(false);
    removeToken()
  }
  return (
    <div>
      <BrowserRouter >
      <UserContext.Provider   value={{isLogin,user ,login,logout}} >
        <Header />
        <div   className='area' >
          <Sidebar  />
          <Routes>
            <Route path='/File' element={<RequireAuth><File /></RequireAuth>} />

            {/* <Route path='/File' element={<File />} /> */}
            <Route path='/FileInformation' element={<FileInformations />} />
            <Route path='/FileInformation/:id' element={<FileInformation />} />
            {/* <Route path='/Content' element={<RequireAuth><Content /></RequireAuth>} /> */}
            <Route path='/Participant' element={<Participant />} />
            <Route path='/Loan' element={<Loans />} />
            <Route path='/Loan/:id' element={<Loan />} />
            <Route path='/Transaction' element={<Transactions />} />
            <Route path='/Transaction/:id' element={<Transaction />} />
            <Route path='/Login' element={<Login />} />
            <Route path='*' element={<Page404 />} />

          </Routes> 
        </div> 
        </UserContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App; 
