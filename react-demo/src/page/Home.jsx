import './Home.css';
import Footer from "../components/Footer/Footer";
import StainTitle from '../components/StainTitle';
import BgBeguin from '../components/BgBegin';



import About from '../img/projectAbout.jpg';
import Irene from '../img/IreneMonlleo.png';
import logohome from '../img/LogoHome.jpg';
import StainGrafic from '../img/ManchaGrafic.png';
import StainUX from '../img/ManchaUx.png';
import StainFront from '../img/ManchaFront.png';
import Mujeres from '../img/MujeresMigrantes.jpg';
import { ButtonA } from '../components/ButtonA';
import { ButtonsLink } from '../components/ButtonsLink';

import { useEffect, useState } from 'react';




export default function Home(props) {
    const [enableScroll, setEnableScroll] = useState(false);
    const [animation, setAnimation] = useState(true);

    useEffect(()=>{
        document.addEventListener('wheel', (event) => {
            setAnimation(false);
            setTimeout(() => setEnableScroll(true), 1000);
        })
    },[])

     

    return ( 
    <>
    <BgBeguin shouldShowHeadboard={animation}></BgBeguin>
    { enableScroll === true && <section className="home__container">
       
        <main className="home">
                <article className="card__container row-desktop about">
                <img className='img__section ' src={Irene} alt="Irene Monlleó"></img>
                <div className='card-text '>
                    <h2 className='card-title'>
                        <span className='title-section'> Bienvenidos a</span>
                        <span className='subtitle-section'>mi portfolio</span>
                    </h2>
                    <p className="card-description left ">Como ya sabeis me llamo Irene Monlleo. Estoy graduada en Bellas Artes en la Universidad Politécnica de Valencia. Seguidamente me especialice en Grafica Publicitaria en la EASD de Castellón y por último he dado el salto al mundodigital de la mano de ESAT
                        Valencia con su postgrado especializado en UX/UI, Marketin digital y Desarrollo Web Front-end.</p>
                    <ButtonA role='button' className='button-contact' href="#contact">Contacto</ButtonA>
                </div> 
                </article>
               
                <article className="card__container row-desktop">
                    <img className='img__section' src={Mujeres} alt="proyecto de diseño"></img>
                    <div className='card-text '>
                        <StainTitle img={StainGrafic} title="Diseño" subtitle="Gráfico"></StainTitle> 
                        <p className="card-description left">Proyectos de branding, manual de identidad, maquetación editorial, cartelería, folletos, etc. Descubre todos los proyectos de Diseño Grafico que he desarrollado hasta ahora.</p>
                        <ButtonsLink  to ="/grafic">Ver más</ButtonsLink>
                    </div> 
                </article>
                

              
                <article className="card__container bg-img">
                    <div className='card-text digital-design '>
                        <StainTitle img={StainUX} title="Ux/" subtitle="Ui"></StainTitle> 
                        <p className="card-description left">La experiencia de usuario es un tema muy importante en el diseño web hecha un vistazo a la metodología empleada en mis proyectos</p>
                        <ButtonsLink  to ="/ux">Ver más</ButtonsLink>
                    </div> 
                </article>

                

                <article className="card__container ">
                    <img className='img__section digital' src={About} alt="proyecto about"></img>
                    <div className='card-text digital-design'>
                        <StainTitle img={StainFront} title="Front-end" subtitle="Developer"></StainTitle> 
                        <p className="card-description left">HTML, CSS, SASS, JS… son los diferentes lenguajes que he desarrollado en estos proyectos.</p>
                        <ButtonsLink  to ="/front">Ver más</ButtonsLink>
                    </div> 
                </article>

              
            

        </main>
        <Footer img={logohome} ></Footer>
    </section>}
    </>  

    );
}