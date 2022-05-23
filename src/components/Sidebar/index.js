import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu,SidebarLinks } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} >
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
        <SidebarMenu>
        
        <SidebarLinks to="About" onClick={toggle}
          smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</SidebarLinks>
        <SidebarLinks to="Ownership" onClick={toggle}
          smooth={true} duration={500} spy={true} exact='true' offset={-80}>Ownership</SidebarLinks>
                <SidebarLinks to="Process" onClick={toggle}
          smooth={true} duration={500} spy={true} exact='true' offset={-80}>Agreement</SidebarLinks>
        <SidebarLinks to="Adopt" onClick={toggle}
        smooth={true} duration={500} spy={true} exact='true' offset={-80}>Adopt</SidebarLinks>
        <SidebarLinks to="Contact" onClick={toggle}
        smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</SidebarLinks>
        </SidebarMenu>
       
              
    
      </SidebarContainer>
  )
}

export default Sidebar