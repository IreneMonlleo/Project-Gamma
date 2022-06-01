
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
        <Wrapper className='caca'>
          <Logo className='name'><Link to ="/">Irene Monlleó</Link></Logo>
          <Mobile role="button" classsName='buerger' onClick ={handleClick}>
            <BurguerButton clicked={showMobileMenu} handleClick={handleClick} />
          </Mobile>

          <Menu className="culo"open= {showMobileMenu}>
                <MenuItem className='links'><MenuItemLink to ="/">Home</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink to ="/Grafic">Diseño Gráfico</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink to ="/Ux">Ux/Ui</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink to ="/Front ">Front-end</MenuItemLink></MenuItem>
                <MenuItem className='links'><MenuItemLink to ="/Footer">Contact</MenuItemLink></MenuItem>
          </Menu>
        
         </Wrapper>
       </NavContainer>

  }
export const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;

`;

export const Logo = styled.div`
  display: flex;
  font-size: 1.2rem;

`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  
 

  
  @media screen and (max-width: 800px) {
    background-color: var(--color-margin);
    position: absolute;
    margin:-24px;
    top:${({ open }) => (open ? "0" : "-200%")}; //Import;
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all .5s ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
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
 
 
  @media screen and (max-width: 800px) {
    div {
      width: 40%;
      justify-content: left;
     
    }
  }
  
`;

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    position: relative;
    left:-10%;
    display: flex;
    cursor: pointer;
    z-index:6;

  }
`;





