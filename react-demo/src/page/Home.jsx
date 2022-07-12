import './Home.css';

import Footer from "../components/Footer/Footer";
import StainTitle from '../components/StainTitle';
import AnimationHome from '../components/AnimationHome/AnimationHome';

import { ButtonA } from '../components/ButtonA';
import { ButtonsLink } from '../components/ButtonsLink';

import { useEffect, useState } from 'react';





export default function Home(props) {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    
    
    //block the scroll//
    const [enableScroll, setEnableScroll] = useState(false);

    const [animation, setAnimation] = useState(true);

    useEffect(()=>{
        document.addEventListener('scroll', (event) => {
            setAnimation(false);
            setTimeout(() => setEnableScroll(true), 1000);
  
        })
        document.addEventListener('touchstart', (event) => {
            setAnimation(false);
            setTimeout(() => setEnableScroll(true), 1000);
  
        })
    },[])

     

    return ( 
    <>
    
    <AnimationHome shouldShowHeadboard={animation}></AnimationHome>
    {/*  block the scroll  */}
    { enableScroll === true && <section className="home__container">
       
        <main className="home" id="header">
                <article className="row-desktop about">
                    <img className='img__section ' src="./picture/IreneMonlleo.png" alt="Irene Monlleó"></img>
                    <div className=' about-container-text'>
                        {/* <h2 className='card-title'>
                            <span className='title-section'> Bienvenidos a</span>
                            <span className='subtitle-section'>mi portfolio</span>
                        </h2> */}
                        <p className=" text-about left ">Desde pequeña tuve gran atención por el detalle y el simbolismo visual, por eso me gradué en Bellas Artes, lo que hizo crecer mi amor por la artesanía y mi cultura visual. Esto me abrió las puertas al diseño gráfico, en el que me adentre por completo con el Ciclo de Grafica Publicitaria. Allí descubrí que mi empatía por los demás era una pieza clave para el trabajo en equipo.<br></br><br></br>
                            Mis ganas de seguir creciendo y desarrollándome en el campo del diseño me llevo al postgrado especializado en UX/UI, Marketing digital y Desarrollo Web Front-end de la ESAT. Donde me he sumergido en un mar de wireframes, código y palabras clave, que hace que crezca mi curiosidad y mis ganas de saber más día tras día.
                        </p>
                        <ButtonA role='button' className='button-contact' href="#contact">Contacto</ButtonA>
                    </div> 
                </article>
               
                <article className="card__container row-desktop">
                    <img className='img__section' src="./picture/Mujeres/MujeresMigrantes.jpg" alt="proyecto de diseño"></img>
                    <div className='card-text '>
                        <StainTitle img="./picture/stain/ManchaGrafic.png" title="Diseño" subtitle="Gráfico"></StainTitle> 
                        <p className="card-description left">Proyectos de branding, manual de identidad, maquetación editorial, cartelería, folletos, etc. Descubre todos los proyectos de Diseño Grafico que he desarrollado hasta ahora.</p>
                        <ButtonsLink  to ="/grafic">Ver más</ButtonsLink>
                    </div> 
                </article>
                

              
                <article className="card__container bg-img">
                    <div className='card-text digital-design '>
                        <StainTitle img="./picture/stain/ManchaUx.png" title="Ux/" subtitle="Ui"></StainTitle> 
                        <p className="card-description left">La experiencia de usuario es un tema muy importante en el diseño web. Echa un vistazo a la metodología empleada en mis proyectos</p>
                        <ButtonsLink  to ="/ux">Ver más</ButtonsLink>
                    </div> 
                </article>

                

                <article className="card__container ">
                    <img className=' digital website-img' src="./picture/refer/Refer-prototipe.jpg" alt="proyecto about"></img>
                    <div className='card-text digital-design'>
                        <StainTitle img="./picture/stain/ManchaFront.png" title="Front-end" subtitle="Developer"></StainTitle> 
                        <p className="card-description left">HTML, CSS, SASS, JS… son los diferentes lenguajes que he desarrollado en estos proyectos.</p>
                        <ButtonsLink  to ="/front">Ver más</ButtonsLink>
                    </div> 
                </article>

              
            

        </main>
        <Footer img="./picture/logo/LogoHome.jpg" ></Footer>
    </section>}
    </>  

    );
}