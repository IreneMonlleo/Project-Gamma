import Header from "../components/Header";
import ManchaFront from '../img/ManchaFront.png';
import logofront from '../img/LogoFront.jpg';
import Footer from "../components/Footer";





export default  function Front() {
    const description=""
    
    return <div className="Grafico">
        <Header title="Front-end" secondtitle="Developer" img={ManchaFront} description={description}></Header>
        <main>
            
            
        </main>
        <Footer img={logofront} name="Puedes contactar conmigo en:"></Footer> 
    </div>
  }