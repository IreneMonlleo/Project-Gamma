
// import { Button } from '../Buttons';
import './Card.css';

export default function Card(props) {
  let img;
  let children;
  if (props.children && props.children.length) {
    const imgIndex = props.children.findIndex(el => el.type === 'img');
    img = props.children[imgIndex];
    
    children = [...props.children];
    children.splice(imgIndex, 1);
  }

  return <article className="card-home">
    {img}
    <div className="card__text">
      { children || props.children }
      <p className="card__description">{ props.description }</p>
      {/* <Button >{ props.text }</Button> */}
    </div>
</article>
}