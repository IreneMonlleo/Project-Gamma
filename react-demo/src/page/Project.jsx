import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";









export default  function Project(props) {

let params = useParams();


const project = props.info.find(project => project.category === params.category && project.id === params.id);

return (<>

    <Header title={project.title} secondtitle={project.secondtitle} img={project.stain} description={project.description}></Header>
 
    <Footer img={project.logo} ></Footer>
    </>
)};