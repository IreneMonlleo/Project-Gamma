import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ManchaGrafic from '../img/ManchaGrafic.png';
import logografic from '../img/LogoGrafic.jpg';







export default  function Grafic() {
    const description= `Un diseñador es aquel que sabe un poquito de todo, pues cada proyecto es diferente 
    y requiere de una investigación y análisis previo. De este modo, podemos encontrar la solución más adecuada.`
    
    return (<div className="grafico">
        
        <Header title="Diseño" secondtitle="Gráfico" img={ManchaGrafic} description={description}></Header>
        <main className="container__grid">
            {/* {info.map((info) => <)
            }
            <img src={info.img-main} alt=""></img> */}
        </main>
        <Footer img={logografic} name="Puedes contactar conmigo en:" ></Footer> 
    </div>
 ) }