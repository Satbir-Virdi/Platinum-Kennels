import styled from "styled-components";

export const InfoContainer = styled.div`
    background-color: #041b21;
    z-index:2;
`

export const BGC = styled.image`
    z-index:1;
    width:100%;
    height:100%;
    object-fit:contain;

`

export const InfoWrapper = styled.div`
    padding: 0px 20px;
    display:grid;
    z-index: 10;
    height: 860px;
    max-width: 1400px;
    justify-content:center;
    margin-right:3.5%;
    margin-left:3.5%;
    position:relative;

`

export const InfoRow = styled.div`
    // display: grid;
    color:white;
    width:100%;
    height:90%;
    overflow:scroll;
    font-size: 24px;
    line-height:120%;
    position:absolute;
    top:12vmin;
    display:inline;

    @media screen and (max-width: 890px){
        font-size:21px;
    }
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
export const Table = styled.div`
    width:100%;
    justify-content:center;
    text-align:center;

    @media screen and (min-width:768px){
        font-size:28px;
    }
    
`


