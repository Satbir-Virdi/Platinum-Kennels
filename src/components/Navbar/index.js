import React from 'react'
import { Nav,NavLogoName, NavbarContainer, NavLogo, MenuIcon, NavItem, NavMenu,NavLinks } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import Dog from '../../images/PlatinumKennelsLogo.jpeg'

//NAvLinks to, scroll to a section of the page with the set id name;
//toggle was a parameter passed from Home(idex from 'pages'), this then takes it in to define it
const Navbar = ({toggle}) => {
    return (
        <> 
            <Nav>
                <NavbarContainer>
                    <NavLogoName to='SectionOne'>
                        Platinum Kennels
                    </NavLogoName>
                    <MenuIcon onClick={toggle}>
                        <FaBars />
                    </MenuIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="About" style={{ display: "inline-flex" }}
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Ownership" style={{ display: "inline-flex" }}
                             smooth={true} duration={500} spy={true} exact='true' offset={-80}>Ownership</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Process" style={{ display: "inline-flex" }}
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Agreement</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="Adopt" style={{display: "inline-flex"}}
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Adopt</NavLinks>
           
                        </NavItem>
                        <NavItem>
                        <NavLinks to="Contact" style={{ display: "inline-flex" }}
                             smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>

                        </NavItem>
                    </NavMenu>
    
                </NavbarContainer>
            </Nav>
        </>
  );
}

export default Navbar;