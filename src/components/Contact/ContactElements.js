import styled from "styled-components";


export const InfoContainer = styled.div`

    background-color: #63053b;
    z-index:1;
    margin:0;
    

    @media screen and (max-width:768px){
        height: 70%;

    }
`
export const InfoWrapper = styled.div`
    height:70%;
    display:grid;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas: "'topline topline' 'col1 col2'"
    max-width: 1400px;
    margin-right:auto;
    margin-left:auto;


    @media screen and (max-width:768px){
        grid-template-areas:"'col1' 'col2'"
    }
`

export const InfoRow = styled.div`
    position:relative;
    justify-content:center;
    margin:auto;
`

export const Column1 = styled.div`
    grid-area: col1;
    margin:auto;
    padding: 10px 10px;
    position:relative;
    text-align:center;
    color:white;
    font-size: 20px;

    line-height:30px;
`

export const Column2 = styled.div`
    
    height:auto;
    margin-right:auto;
    margin-left:auto;

    text-align:center;
    width:auto;

    grid-area: col2;
    color:white;
    position:relative;
  
    font-size:20px;
    
`

export const TextWrapper = styled.div`
    max-width:1400px;
    padding-bottom:2%;
`

export const TopLine = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 15;
    text-align:center;

    @media screen and (max-width:768px){
        font-size:32px;
    }
`

