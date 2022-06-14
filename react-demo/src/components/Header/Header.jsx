import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import './Header.css';

export default function Header(props) {
let params = useParams();

  return <WrapperHeader Ux={params.category == ['ux-ui']}>
    <div className='header__container'>
      <img className='header__image' src={ props.img } alt="Mancha corporativa" />
      <h1 className='left'>{ props.title }<br></br>{ props.secondtitle }
      </h1>
    </div>
    <p className="header__description"> { props.description }</p>
  </WrapperHeader>
}

export const WrapperHeader = styled.header`
.header__container{
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 11vh;

    &::before{
      content: "";
      background-color: ${({ Ux }) => (Ux ? "var(--color-header,#DD723A)"  : "var(--color-header,#A9B59D)")}; //Import;
      position: absolute;  
      top: 0px;
      left: 0px;
      bottom:50vh;
      right: 0px;
      animation: slid-header 1s ease-in forwards;
    }
}
  
  @keyframes slid-header {
      0% {
          top:0;
          bottom:100%
          
      }
     100% {
          bottom:54vh ;
         
      }
    } 

  .header__image{
      height: 13vh;
      margin:12px;
  }

  .header__description{
      margin:48px 25vw;
      text-align: left;
      
  }

  @media all and (min-width:700px){

      .header__container{
          margin-top: 30vh;

          &::before{
            margin: 0 80px;
            /* bottom: 50vh; */
          }
      }
          
  
      .header__description{
          margin:102px 25vw;        
      }
  
  
  }

`