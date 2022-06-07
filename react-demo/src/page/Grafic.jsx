import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ManchaGrafic from '../img/ManchaGrafic.png';
import logografic from '../img/LogoGrafic.jpg';
import { Link } from "react-router-dom";

import './Grafic.css';






export default  function Grafic(props) {

    const description= `Un diseñador es aquel que sabe un poquito de todo, pues cada proyecto es diferente 
    y requiere de una investigación y análisis previo. De este modo, podemos encontrar la solución más adecuada.`
    
    return (<div className="grafico">
        <Header title="Diseño" secondtitle="Gráfico" img={ManchaGrafic} description={description}></Header>
        <main className="container__grid">
            
            { props.data.filter((elem) => elem.category === 'diseño-grafico').map((info =>
            
            <div className="grid-container">
                <article id="3691" class="location-listing">
                    <Link className="location-title"to={`/${props.category}/${info.id}`}>
                        {info.title}<br></br>{info.secondtitle}            
                    </Link> 
                    <div class="location-image">
                        <Link to={`/${props.category}/${info.id}`}>
                            <img className="grid-img" src={info['img-main']} alt={info.alt} ></img>
                        </Link>     
                    </div>         
                </article>
            </div>
                
                
        ))}
            
        </main>
        <Footer img={logografic} ></Footer> 
    </div>
 ) }