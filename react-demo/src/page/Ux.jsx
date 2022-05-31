import Footer from "../components/Footer";
import Header from "../components/Header";
import './Ux.css';

import ManchaUX from '../img/ManchaUx.png';
import logoUx from '../img/LogoUx.jpg';





export default  function Ux() {
    const description="Tener una buena experiencia de usuario y una web atractiva e intuitiva, es imprescindible en los tiempos que corren."
    
    return <div className="Ux">
        <Header title="UX / " secondtitle="UI" img={ManchaUX} description={description}></Header>
        <main>
            
        </main>
        <Footer img={logoUx} name="Puedes contactar conmigo en:" ></Footer>
    </div>
  }