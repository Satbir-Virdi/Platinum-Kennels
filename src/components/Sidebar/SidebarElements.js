import styled from 'styled-components';
//this is the 'x' icon, 'multiply symbol'
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

//aside is used for things indirectly related to the document content
export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999; //z index means it overlays everything else, like "bring forward/back"
    width:100%;
    height:100%;
    background:#42192c;
    display: grid;
    align-items:center;
    top:0;
    right:0;
    transition: 0.5s ease-in-out; //move fast then slow, it moves/transforms an element
    opacity:${({ isOpen }) => (isOpen ? '98%' : '0')};
    right:${({ isOpen }) => (isOpen ? '0' : '-100%' )}; 
`
 // ${({ }) => ()}    an if..else.. statement for css
 //if the tab is Open, its opacity is 100%
 //the movement down of the tab menu
 // the -100% means it goes to the other side. i.e opposite. If it were right:..100% then it would start left and finish right
 // top -100% means it starts at top and goes bottom. top 100% means it starts bottom and inishes top
 // '0' '100%' means it starts at the absolute edge of screen and if true, goes to other edge


export const CloseIcon = styled(FaTimes)`
    color:white;
    position:relative;
`
// relative is relative to the position set. since no position is set, its top right corner.

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    outline:none;
    cursor:pointer; //changes the cursor to other things
`

export const SidebarMenu = styled.div`
    color: #cce1e6;
    display: grid;
    text-align:center;
    grid-template-rows: repeat(6,80px)

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px)
    }
`
//grid-template-rows -> sets size for components in rows. so 1rem 2 rem 1 rem sets three rows rto be 1 rem, second is 2, 3rd is 1
export const SidebarLinks = styled(LinkScroll)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:1.9rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:white;
    cursor:pointer;

    &:hover{
        color: #5cd500;
        transition:0.2s ease-in-out;
    }
`