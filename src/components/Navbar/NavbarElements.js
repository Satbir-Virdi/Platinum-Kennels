import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import "typeface-amiri";

export const Nav = styled.nav`
    background:#090005;
    height: -80px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index:100;
    border:'none';
    
    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`
//sticky means that as you scroll down the navbar will stay at the top

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height:80px;
    width: 100%;
`

export const NavLogo = styled.div`
`

export const NavLogoName = styled(LinkRouter)`
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding: 1rem;
    cursor:pointer;
    font-size:2.7rem;
`
// when the screen reaches this dimension, do this..
export const MenuIcon = styled.div`
    display:none;
    
    @media screen and (max-width: 890px){
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 40%);
        cursor: pointer;
        font-size: 1.8rem;
        color: white;
    }
`
//NavMenu is an undordered list, hence ul
export const NavMenu = styled.ul`
    display:inline-flex;
    flex-direction:row;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 890px){
        display: none;
    }

`
export const NavItem = styled.li`
    display:inline-flex;
    flex-direction:row
    height:80px;
    overflow:auto;
`


export const NavLinks = styled(LinkScroll)`
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding: 1rem;
    cursor:pointer;
    font-size:1.3rem;
    border-bottom: 4px solid transparent;
    
    //activate a style upon a link click
    &:active{
        color: green; 
    }

    &:hover{
        border-bottom: 4px solid #5cd500;
    }

`
//transparent border gets around the content shift when ading a border on hover
//position: sticky -> it starts in a position and as you scroll it maintains that position on the screen
//z-index -> like "bring forward" or "send back". bigger value is more in front
//@media screen -> when the screen reaches a certain dimension
//justify-content: space between -> spaced evenly from the midline of the window
//&:active -> onclick
//&:hover -> mouse hovers over it
// (tag id name):hover
// (tage id name):active