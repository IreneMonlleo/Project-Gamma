
 import React, { useState } from 'react'
 import { Link } from 'react-router-dom'
 import styled from 'styled-components'
 import BurguerButton from './BurguerButton'
 
 export default function Navbar(props) {
 
  const [showMobileMenu, setShowMobileMenu] = useState(false);
   function handleClick() {
     //cuando esta true lo pasa a false y viceversa
     setShowMobileMenu(!showMobileMenu);
   }
   return <NavContainer className='menu'>
        <Wrapper className='2' >
          <Logo role="button" className='name'><Link to ="/">Irene Monlleó</Link></Logo>
          <Mobile role="button" classsName='burger' onClick ={handleClick}>
            <BurguerButton clicked={showMobileMenu} handleClick={handleClick} />
          </Mobile>

          <Menu open= {showMobileMenu}>
                <MenuItem className='links'><MenuItemLink onClick ={handleClick} to ="/">Home</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink onClick ={handleClick} to ="/Grafic">Diseño Gráfico</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink onClick ={handleClick} to ="/Ux">Ux/Ui</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink onClick ={handleClick} to ="/Front ">Front-end</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemA onClick ={handleClick} href="#contact">Contact</MenuItemA></MenuItem>
          </Menu>
        
         </Wrapper>
       </NavContainer>

  }
export const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  @media screen and (max-width: 700px) {
  position:fixed;
  z-index:2;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:right;
  

  @media screen and (max-width: 700px) {
    justify-content: space-between;
    background-color:var(--color-margin);
  }
`;

export const Logo = styled.div`
  display: flex;
  font-size: 1.2rem;
  z-index:var(--bottom-medium)
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: right;
  position: fixed;
  top: 0px;
  right: 100px;
  margin-top:20px;
 

  @media screen and (max-width: 700px) {
    background-color: var(--color-margin);
    position: absolute;
    margin:-100px;
    top:${({ open }) => (open ? "0" : "-200%")}; //Import;
    
    width:100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all .5s ease;

    z-index:var(--medium);
    

  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const MenuItemA= styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight:800;
  cursor: pointer;
  transition: all .5s ease;


@media screen and (max-width: 700px) {
  div {
    width: 40%;
    justify-content: left;
   
  }
}
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: var(--color-typography);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .5s ease;
 
 
  @media screen and (max-width: 700px) {
    div {
      width: 40%;
      justify-content: left;
     
    }
  }
  
`;

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    position: relative;
    top:10%;
    left:-5%;
    display: flex;
    cursor: pointer;
    z-index:var(--top);

  }
`;





