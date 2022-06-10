import styled from 'styled-components';
// import Headboard from './Headboard/Headboard';
// import Quest from './Quest/Quest';
// import { keyframes } from 'styled-components'


export default function BgBeguin(props) {

//     const [animation, setAnimation] = useState(false);



//    function animationScroll() {
//      setAnimation(! animation);
//    }


//     useEffect(()=>{
//         document.addEventListener('scroll',()=>{
//          animationScroll={.wrapper-begin }?
              
//     }) 
//     },[])

    return(
        // <WrapperBg open={animation}>
        <WrapperBg >
            {/* <Headboard></Headboard>
            <Quest></Quest> */}
        </WrapperBg>
    )
    

}
export const WrapperBg = styled.div`
    height:300px;
    width:100%;
   
        &::before{
            content: "";
           
            background-color: var(--color-home);
            position: absolute;  
                    top: 0px;
                    left: 0px;
                    bottom:54vh;
                    right: 0px;

            animation: animation-begin 3.0s ease-out forwards;
        }
    
}
            @keyframes animation-begin {
                
                0% {
                    top:0;
                    bottom:100%
                            
                }
                100% {
                    bottom:54vh ;      
                }
            
            } 
    @media all and (min-width:700px) {
        &::before{
            margin: 0 80px;
            position:absolute;
                top:0;
                bottom: 0;
                left:0;
                right: 38vw;${({ open }) => (open ? "38vw" : "100%")};
                margin:80px;
            animation: slide-right 1.0s linear ;
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