import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Front from './page/Front';
import Grafic from './page/Grafic';
import Home from './page/Home';
import Ux from './page/Ux';


// useEffect(()=>{
//   axios.get('jsons/data.json'),
//   .then((response)=>{(respose.data);});
// }, []);

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grafic" element={<Grafic />}></Route>
        <Route path="/ux" element={<Ux />}></Route>
        <Route path="/front" element={<Front />}></Route>
        {/* <Route path="/project/:id" element={<Project />} /> */}
      </Routes>
    </div>
  );
}

export default App;