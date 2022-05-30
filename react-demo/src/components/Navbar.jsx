import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Menu, MenuItem, MenuItemLink, Mobile, Wrapper } from "./NavbarElements";


// conts [showMobileMenu, setShowMobileMenu]= useState (false);

export default function Navbar(props) {
 

    return (<Container className='menu'>
        <Wrapper>
        <Logo className='name'><Link to ="/">Irene Monlleó</Link></Logo>
          <Mobile onClick ={() => setShowMobileMenu (!showMobileMenu)}>
            <svg  viewBox="0 0 24 24">
              <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </Mobile>
          <Menu open= {showMobileMenu}>
              <MenuItem className='links'><MenuItemLink to ="/">Home</MenuItemLink></MenuItem>
              <MenuItem className='links'><MenuItemLink to ="/Grafic">Diseño Gráfico</MenuItemLink></MenuItem>
              <MenuItem className='links'><MenuItemLink to ="/Ux">Ux/Ui</MenuItemLink></MenuItem>
              <MenuItem><MenuItemLink to ="/Front ">Front-end</MenuItemLink></MenuItem>
              <MenuItem><MenuItemLink to ="/Footer">Contact</MenuItemLink></MenuItem>
          </Menu>
        </Wrapper>
        
      </Container>
    );
}
