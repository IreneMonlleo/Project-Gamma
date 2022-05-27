import './Card.css';

export default function Card(props) {
  

  return <article className="card-home">
     {props.children}
    <div className="card__text">
      <h1 className="card__title">{ props.title }</h1>
      <p className="card__description">{ props.description }</p>
      <button className="card__buttons">Contactar</button>
    </div>
</article>
}