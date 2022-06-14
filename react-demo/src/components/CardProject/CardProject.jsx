import './CardProject.css';

export default function CardProjects(props) {
  
  return(
    <article className="container-card">
    <div className="container-img-card">
        <img className="img-card" src={props.img1} alt={props.alt1}></img>
        <img className="img-card grap" src={props.img2} alt={props.alt2}></img> 
    </div>
    <h3 className='titles-section'>{props.title}</h3>
    <p className="text-card left">{props.text}</p>
    <p className="text-card left">{props.text1}</p>
    <p className="text-card left">{props.text2}</p>
    </article>
  )
} 