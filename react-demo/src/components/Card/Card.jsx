
import { Button } from '../Buttons';
import './Card.css';

export default function Card(props) {
  

  return <article className="card-home">
     {props.children}
    <div className="card__text">
      <p className="card__description">{ props.description }</p>
      <Button >{ props.text }</Button>
    </div>
</article>
}