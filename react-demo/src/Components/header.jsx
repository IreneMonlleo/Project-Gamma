export default function Header(props){
    return 
    <header className="header">
        <img>{props.img}</img>
         <h1> {props.name} </h1>;
    </header>
   
}