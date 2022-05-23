import React from 'react';
import './App.css';
import Contact from './components/Header';

function App() {
  const userList = [
    { name: 'Diseño Gráfico', feature: false,  picture: '../public/img/ManchaGrafic.png' },
    { name: 'UX / UI', feature: false,  picture: '../public/img/ManchaUX.png' },
    { name: 'Front-end developer', feature: false,  picture: './public/img/ManchaFront.png' },
  ];

  return (
    <div className="App">
      { userList.map((user) => <Contact feature={user.feature} name={ user.name } img={ user.picture }></Contact>) }
    </div>
  );
}

export default App;