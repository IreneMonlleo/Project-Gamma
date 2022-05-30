import { Link } from "react-router-dom";
import styled from "styled-components";






export const Container = styled.nav`
width: 100%;
height:70px;
`;

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height:70px;
display:flex;
flex-wrap;
justify-content:space-between;
margin:auto;
`;

export const Logo = styled.p`
font-weight: bold;
color: var(--color-typography);
`;
export const Menu = styled.ul`
background-color:white;
height: 100%;
display:flex;
justify-content: space-between;
list-style:none;

@media screen and (max-width: 960px){
    position:absolute;
    top: 70px;
    rigth:${({open})=> open ? "0": "-100"};
    width:100%;
    height:90 vh;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    transition: 0.5s all ease;
}
 
`;


export const MenuItem = styled.li`
height: 100%;
@media screen and (max-width: 960px){
    width:100%;
    heigth:70px;
    display:felx;
    height:90 vh;
    justify-content: center;
    align-items:center;
   
}
`;
export const MenuItemLink = styled(Link)`
display:flex;
justify-content:center;
align-items:center;
height: 100%;
padding: 0.5rem 2.5rem;
color: var(--color-typography);
cursor:pointer;
font-weight: bold;
transition: 0.5s all ease;

    &:hover{
        color:var(--color-home);
        background-color: var(--color-bg);
        transition: 0.5 all ease;
    }

    @media screen and (max-width: 960px){
        width:100%;
    }
`;

export const Mobile = styled.p`
display:none;
    @media screen and (max-width: 960px){
    display:block;
    align-items:center;
    cursor:pointer;

        svg{
            color: var(--color-home);
            widht:50px;
        }
    }

`;