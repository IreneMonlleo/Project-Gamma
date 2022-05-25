import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Grafic from './page/Grafic';
import Home from './page/Home';


useEffect(()=>{
  axios.get('jsons/data.json'),
  .then((response)=>{(respose.data);});
}, []);

function App() {
  
  return (
    <div className="App">
      <p className='name'>Irene Monlleó</p>

      <nav className='menu'>
        <Link to ="/">Home</Link>
        <Link to ="/grafic">Diseño Gráfico</Link>
        <Link to ="/Ux">Ux/Ui</Link>
        <Link to ="/Front ">Front-end</Link>
        <Link to ="/Footer">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grafic" element={<Grafic />}></Route>
        {/* <Route path="/ux" element={<Ux />} /> */}
        
        {/* <Route path="/front" element={<Front />} /> */}
        {/* <Route path="/project/:id" element={<Project />} /> */}
      </Routes>
    </div>
  );
}

export default App;