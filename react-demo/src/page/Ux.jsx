import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './Ux.css';

import ManchaUX from '../img/ManchaUx.png';
import logoUx from '../img/LogoUx.jpg';
import { Link } from "react-router-dom";





export default  function Ux(props) {
    const description="Tener una buena experiencia de usuario y una web atractiva e intuitiva, es imprescindible en los tiempos que corren."
    
    return <div className="Ux">
        <Header title="UX / " secondtitle="UI" img={ManchaUX} description={description}></Header>
        <main className="grid-container grid-ux">
        { props.data.filter((elem) => elem.category === 'ux-ui').map((info =>
            
                <article id="3691" class="location-listing">
                    <Link className="location-title"to={`/${info.category}/${info.id}`}>
                        {info.title}<br></br>{info.secondtitle}            
                    </Link> 
                    <div class="location-image">
                        <Link to={`/${info.category}/${info.id}`}>
                            <img className="grid-img" src={info['img-main']} alt={info.alt} ></img>
                        </Link>     
                    </div>         
                </article>
         

            ))
        }
        </main>
        <Footer img={logoUx} name="Puedes contactar conmigo en:" ></Footer>
    </div>
  }