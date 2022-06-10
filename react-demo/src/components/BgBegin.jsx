import styled from 'styled-components';
import Headboard from './Headboard/Headboard';
import Quest from './Quest/Quest';



export default function BgBeguin(props) {



    return(
        
        <WrapperBg className={!props.shouldShowHeadboard ? 'animation-start' : ''}>
            {props.shouldShowHeadboard && <Headboard></Headboard>}
            {!props.shouldShowHeadboard && <Quest></Quest>}
        </WrapperBg>
    )
    

}
export const WrapperBg = styled.div`
    height: 100vh;
    width:100%;
    align-items: center;
    justify-content: center;
    displat:flex;

        &::before{
            content: "";
           
            background-color: var(--color-home);
            position: absolute;  
                    top: 0px;
                    left: 0px;
                    bottom:50vh;
                    right: 0px;

            animation: animation-begin 2.5s ease-out forwards;
        }
    
}
            @keyframes animation-begin {
                
                0% {
                    top:0;
                    bottom:100%
                            
                }
                100% {
                    bottom:50vh ;      
                }
            } 

    .animation-start{

    }


    @media all and (min-width:700px) {
        &::before{
            margin: 0 80px;
                bottom: 0;
                right:38vw;
                margin:80px;
            animation: slide-right 2.5s linear ;
        }
            
        @keyframes slide-right {
            0% {
                width: 100%;
            }
            100% {
                width:50%;
            }
        }    
    }        

`