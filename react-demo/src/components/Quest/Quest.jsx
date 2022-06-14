
import { ButtonsLink } from '../ButtonsLink';
import './Quest.css'




export default function Quest(props) {


    return ( 
        <section className="quest__container">
          <div className='container-text-quest'>
            <p className="quest__text">Hola!!<br></br> 
                Soy <b>Irene Monlleó</b> y soy una profesional multidisciplinar por lo que eres libre de elegir que trabajos quieres ojear </p>
            <h3 className="quest">¿Que estas buscando?</h3>
          </div>
          <div className="quest__buttons">
         
            <ButtonsLink secondary to ="/grafic">Diseño Gráfico</ButtonsLink>
            <ButtonsLink secondary to ="/ux">Ux / Ui</ButtonsLink>
            <ButtonsLink secondary to ="/front">Front-end </ButtonsLink>
            
          </div>
          
        </section>

    );}
    