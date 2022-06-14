
import { useParams } from "react-router-dom";
import './Project.css';
import CardProjects from "../components/CardProject/CardProject";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useEffect } from "react";



export default  function Project(props) {
    
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

let params = useParams();


const project = props.info.find(project => project.category === params.category && project.id === params.id);

return project && <>
        <Header title={project.title} secondtitle={project.secondtitle} img={project.stain} alt={project.alt}></Header>
        <div className="wrapper__project left">
            <main className="main ">
                <div className="container-text-top">
                    <p className="Brief">{project.briefing}</p>
                    <p className="tolls2">{project.tolls2}</p>
                    <h3 className="tolls">{project.tolls}</h3>
                </div>
                <img className="img-main" src={project['img-main']} alt={project.altMain}></img>
            </main>
            <h3 className="titles-section">Objetivos</h3>
            <ul className="container-objective ">
                <li className="objective">{project.objective1}</li>
                <li className="objective" >{project.objective2}</li>
                <li className="objective">{project.objective3}</li>
            </ul>
            <CardProjects img1={project['img-1']} alt1={project.alt1} 
                img2={project['img-2']} alt2={project.alt2}
                title="Metodología" text={project.metodologi1}
                text1={project.metodologi2}
                text2={project.metodologi3}>
            </CardProjects>

            <CardProjects img1={project['img-3']} alt1={project.alt3} 
            img2={project['img-4']} alt2={project.alt4}
            title="Conclusión" text={project.conclution}
            text1={project.conclution1}
            text2={project.conclution2}></CardProjects>

        </div>
        <Footer img={project.logo} ></Footer>
    </>};