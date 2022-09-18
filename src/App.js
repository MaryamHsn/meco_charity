import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Content from './context/Content'
import Footer from './context/Footer'
import Header from './context/Header'
import Sidebar from './context/Sidebar'
import File from './context/File/File'
import './context/Style.css';
import UserContext from './context/UserContext';
import  {setToken,getToken,removeToken} from './context/Utils'
import  request from './context/request';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [isLogin,setIsLoggin]=useState(false);
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
  }
  function getUser(){
    request('/users/2')
    .then(response=>{
      setUser(response.data)
      setIsLoggin(true)})
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
            <Route path='/File' element={<File />} />
            <Route path='/Content' element={<Content />} />
            <Route path='/footer' element={<Footer />} />

          </Routes> 
        </div> 
        </UserContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
// import { Route, Routes } from 'react-router-dom'
// import Page404 from './Newfolder/context/404'
// import About from './Newfolder/context/About'
// import Contact from './Newfolder/context/Contact'
// import Dashboard from './Newfolder/context/Dashboard'
// import Footer from './Newfolder/context/Footer'
// import Header from './Newfolder/context/Header'
// import Home from './Newfolder/context/Home'
// import Login from './Newfolder/context/Login'
// import Post from './Newfolder/context/Post'
// import Posts from './Newfolder/context/Posts'
// import Profile from './Newfolder/context/Profile'
// import Provider from './Newfolder/context/Provider'
// import RequireAuth from './Newfolder/context/RequireAuth'
// import Sidebar from './Newfolder/context/Sidebar' 
// import './Newfolder/context/style.css'

// export default function App () {
//   return (
//     <Provider>
//       <div>
//         <Header />
//         <section style={{ display: 'flex' }}>
//           <Sidebar />
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/login' element={<Login />} />
//             <Route
//               path='/profile'
//               element={<RequireAuth element={<Profile />} />}
//             />
//             <Route
//               path='/dashboard'
//               element={
//                 <RequireAuth>
//                   <Dashboard />
//                 </RequireAuth>
//               }
//             />
//             <Route path='/post' element={<Posts />} />
//             <Route path='/post/:id' element={<Post />} />
//             <Route path='*' element={<Page404 />} />
//           </Routes>
//         </section>
//         <Footer />
//       </div>
//     </Provider>
//   )
// }
