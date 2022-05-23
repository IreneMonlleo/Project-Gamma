import Header from './components/Header';


function Grafic() {
    // const userList = [
    //   { name: 'Diseño Gráfico', feature: false,  picture: '../public/img/ManchaGrafic.png' },
    //   { name: 'UX / UI', feature: false,  picture: '../public/img/ManchaUX.png' },
    //   { name: 'Front-end developer', feature: false,  picture: './public/img/ManchaFront.png' },
    // ];
  
    // return (
    //   <div className="App">
    //     { userList.map((user) => <Header feature={user.feature} name={ user.name } img={ user.picture }></Header>) }
    //   </div>
    // );

    return <div className="Grafico">
        <Header title="Diseño Gráfico" img="./img/ManchaGrafico.png"></Header>
    </div>
  }