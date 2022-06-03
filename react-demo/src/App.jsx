import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Navbar from './components/Menu/Navbar';
import Front from './page/Front';
import Grafic from './page/Grafic';
import Ux from './page/Ux';
import Home from './page/Home';
import Project from './page/Project';




function App() {

  const [info, setInfo] = useState([]);



  useEffect(() => {
    axios.get('/jsons/data.json')
      .then(response => setInfo(response.data.results));
  }, [])


  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/grafic' element={<Grafic data={info}/>} />
      <Route path='/ux' element={<Ux />} />
      <Route path='/front' element={<Front/>}/>
      <Route path='/:category/:id' element={<Project/>}/>
      {/* <Route path="*" element={<Error />} /> */}
      </Routes>
     
    </div>
  );
}

export default App;