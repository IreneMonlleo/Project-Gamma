
import { ButtonsLink } from '../ButtonsLink';
import './Quest.css'




export default function Quest(props) {


    return ( 
        <section className="quest__container">
          <div className='container-text-quest'>
            <p className="quest__text">¡¡Hola!!<br></br> 
            Me llamo  <b>Irene Monlleó</b>. ¿Cuál de mis campos profesionales encaja mejor contigo? </p>
            <h3 className="quest">Pincha para descubrir mis proyectos</h3>
          </div>
          <div className="quest__buttons">
         
            <ButtonsLink secondary to ="/grafic">Diseño Gráfico</ButtonsLink>
            <ButtonsLink secondary to ="/ux">Ux / Ui</ButtonsLink>
            <ButtonsLink secondary to ="/front">Front-end </ButtonsLink>
            
          </div>
          
        </section>

    );}
    