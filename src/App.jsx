import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppWrapper from './Components/AppWrapper';
import Layout from './Components/Layout';
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './Components/Styles/home';
import Login from './Login';
import { useEffect } from 'react';

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    //const params = useParams();
    const [params,setParams]= useSearchParams();
    const [name,setName]= useState('someething');
   

// console.log(location);
   console.log(params.get('name'), 'params');
    
   useEffect(()=>{
    setName(params.get('name'));
   },[params])

    
    useEffect(() => {
        if(location.pathname === '/about') {
            //alert('You are on the about page');
           // navigate('/login');
        }
    }, [location,navigate])

    return(
     
      <AppWrapper>
      <Layout>
        <div>{name}</div>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about/:user_id" element={<About/>} />
        </Routes>
      </Layout>
    </AppWrapper>
   
   )
}


export default App;


export const Nav = () =>{
    return <div className="nav">
      <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/about'>About</Link> </li>
        <li><Link to='/contact'>Contact</Link> </li>
        <li><Link to='/login'>Login</Link> </li>
      </ul>
    </div>;
  }
