import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ManchaGrafic from '../img/ManchaGrafic.png';
import logografic from '../img/LogoGrafic.jpg';
import { Link } from "react-router-dom";








export default  function Grafic(props) {
    


    const description= `Un diseñador es aquel que sabe un poquito de todo, pues cada proyecto es diferente 
    y requiere de una investigación y análisis previo. De este modo, podemos encontrar la solución más adecuada.`
    
    return (<div className="grafico">
        
        <Header title="Diseño" secondtitle="Gráfico" img={ManchaGrafic} description={description}></Header>
        <main className="container__grid">
            {/* { info.map((info => 
            <Link to={`/${props.category}/${info.id}`}>
                   
                    <div className="content-card">
                        <h2 className='title-grid'>{info.title}</h2>
                        <p className='text-grid'>{info.secondtitle}</p>
                    </div>
                    <img src={info.img-0} alt={info.alt} className="grid__img"></img>

                </Link>
            ))} */}
        </main>
        <Footer img={logografic} ></Footer> 
    </div>
 ) }