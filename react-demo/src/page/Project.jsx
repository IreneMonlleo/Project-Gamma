
import { useParams } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Slider from "../components/Slider";







export default  function Project(props) {

let params = useParams();


const project = props.info.find(project => project.category === params.category && project.id === params.id);

return project && <>
        <Header title={project.title} secondtitle={project.secondtitle} img={project.stain} description={project.description}></Header>
        <Slider img={project['img-main']}></Slider>
        <Footer img={project.logo} ></Footer>
    </>};