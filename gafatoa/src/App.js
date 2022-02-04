import React, { useState, useEffect }  from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Create from './Create'
import Read from './Read'
import Update from './Update'
import PostHorodatages from './PostHorodatage/PostHorodatages'
import LoginPage  from './LoginPage/LoginPage'
import ReadHoro  from './ReadHoro/ReadHoro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

var user = null ;
var userId = 0 ;

function App() {
  //  useEffect(() => {
  //       user = JSON.parse(localStorage.getItem("user"));
  //       console.log(user)
  //       console.log(user["idUser"])
  //       if (user != null){
  //         userId = user["idUser"];
  //       }
  //       console.log(userId !== 0)
  //   })

  const logOut = () => {
    localStorage.removeItem("user"); 
  }

  return (
      <div className="App">
          <header>
            <nav>
              <h1>
                Gafatoa
              </h1>
              <button className='btn btn-nav'>
                <Link to='/read' className="btn btn-nav">
                      User Table
                </Link>
              </button>
              <button className='btn btn-nav'>
                <Link to='/create' className="btn btn-nav">
                      Pointage
                </Link>
              </button>
              <button className='btn btn-nav'>
                <Link to="/horodatage" className="btn-nav">
                      Horodatage
                </Link>
              </button>
              <button className='btn btn-primary' onClick={logOut}>
                <Link to="/" className="btn">Logout</Link>
              </button>
            </nav>
          </header>
          <div className='route'>
            <Routes>
              <Route exact path='/read' element={<Read />} />
              <Route exact path='/update' element={<Update/>} />
              <Route exact path='/horodatage' element={<ReadHoro/>} />
              <Route exact path='/create' element={<PostHorodatages/>} />
              <Route exact path='/' element={<LoginPage/>} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
