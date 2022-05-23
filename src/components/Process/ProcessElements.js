import styled from 'styled-components';

export const ProcessInfoWrapper = styled.div`
    background-color: #52092d;
`

export const ProcessBody = styled.div`
    // padding: 0px 20px;
    display:grid;
    z-index: 10;
    // max-height:100%;
    max-width: 1400px;
    justify-content:center;
    margin-right:3.5%;
    margin-left:3.5%;
    position:relative;
    height: 880px;


`

export const Topline = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 15;
    text-align:center;
   

    @media screen and (max-width:768px){
        font-size:32px;
    }
`

export const InfoRow = styled.div`
    display: inline;
    color:white;
    width:100%;
    height:95%;
    overflow:scroll;
    font-size: 24px;
    line-height:29px;
    position:absolute;
    top:12vmin;
    

    @media screen and (max-width: 900px){
        line-height:24px;
        font-size:21px;
    }
`

export const I = styled.div`
    color:#5cd500;
    display:inline;
`