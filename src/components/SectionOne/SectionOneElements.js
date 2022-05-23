import styled from 'styled-components';
import { Link } from 'react-scroll';

export const SectionOneContainer = styled.div`
    background: black;
    display: flex;
    justify-content:center;
    align-items:center;
    height:800px;
    postion: relative;
    z-index:1
`
//all the stuff in this container will have this property unless specified

export const SectionOneBG = styled.div`
    width:100%;
    height:100%;
    display:block;
    object-fit:cover;
`


//overflow means how we handle a component that goes beyond the dimensions set, hidden: cropped to fit

export const SectionOneText = styled.div`
    max-width:1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items:center;
    z-index:3;
`
//defines common set of properties for the texts


export const SectionOneH1 = styled.h1`
    font-size: 48px;
    text-align:center;
    color:white;
    display:inline-block;
    animation-fill-mode: forwards;
    font-weight: 120;
    
    @media screen and (max-width:768px){
        font-size:40px;
    }

    @media screen and (max-width:480px){
        font-size:32px;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`
//@keyframes allow an animation to occur
//the Smart, Staunch,Strong tags inherit from the SectionOneH1 css
export const Smart = styled(SectionOneH1)`
    opacity:0;
    color:white;
    animation: fadein 1.4s;
    animation-fill-mode: forwards; 
`
//animation-fill-mode:forwards: keeps the changes made by the animation
export const Staunch = styled(Smart)`
    animation-delay:0.8s; 
`
export const Strong = styled(Smart)`
    animation-delay:1.6s; 
`

export const SectionOneP = styled.p`
    opacity:0;
    text-align:center;
    color:white;
    max-width:400px;
    margin-top:14px;
    font-size: 20px;
    
    animation: fadein 1s;
    animation-delay: 2.4s;
    animation-fill-mode:forwards;

    @media screen and (max-width: 768px){
        font-size:17px;
    }
    @media screen and (max-width: 480px){
        font-size:14px;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`

export const LearnMore = styled(Link)`
    color:white;
    text-align:center;
    justify-content:center;
    background:transparent;
    cursor:pointer;
    position:relative;
    bottom:-150px;


    &:hover{
        transition: transform 0.5s;
        transform: scale(1.1);
    }
    &:not(:hover){
        transition: transform 0.5s;
        transform: scale(1);
    }
`
// :not(:----) the opposite class, when not ---
// relative position is realtive to the parent component
export const LearnMoreIcon = styled.div`


`