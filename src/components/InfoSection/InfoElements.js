import styled from "styled-components";

export const InfoContainer = styled.div`
    background-color: #42192c;
    display:grid;

    @media screen and (max-width:768px){
        padding:10px 0;

    }
`
export const InfoWrapper = styled.div`

    display:grid;
    z-index: 4;
    height: 860px;
    max-width: 1400px;
    justify-content:center;
    margin-right:3.5%;
    margin-left:3.5%;
`


export const S = styled.div`
overflow:scroll;
`
export const InfoRow = styled.div`
   
    display:flex;
    // display: grid;
    grid-auto-columns: 50%;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1'`: `'col1 col2'`)};

    @media screen and (max-width:660px){
        display:grid;
        grid-auto-columns:100%;
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1'`: `'col2' 'col1'`)};

    }
  
`

export const Column1 = styled.div`
    margin-bottom:15px;
    grid-area: col1;
    @media screen and (max-width:660px){
        margin-bottom:20.6vmax;

    }
`

export const Column2 = styled.div`
    // margin-bottom:15px;
    grid-area: col2;
    margin-left: 10px;
`

export const TextWrapper = styled.div`
    max-width:1400px;
    bottom:0;
`

export const TopLine = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 15;
    margin-bottom: 10px;
    text-align:center;

    @media screen and (max-width:768px){
        font-size:32px;
    }
`

export const Subheading = styled.p`
    max-width:1400px;
    font-size:24px;
    color:white;
    line-height: 29px;
    right:0;
    margin-bottom:20px;
    grid-area:sub;

    @media screen and (max-width: 890px){
        line-height:24px;
        font-size:21px;
    }
`

export const StormiInfo = styled.p`
    max-width:1400px;
    margin-top:10px;
    font-size:24px;
    line-height: 100%;
    right:0;
    color:white;
    padding:0 10px;
    width:100%;

    

    @media screen and (max-width: 890px){
        line-height:24px;
        font-size:21px;
    }
`
export const SireImg = styled.div`
    width:100%;
    height:100%;
    
    top:0;
    position:relative;
    margin-bottom:-65px;

    justify-content:right;
    text-align:center;

`
export const Sire2Img = styled.div`
    width:100%;
    height:100%;
    margin-top:10px;


    justify-content:right;
    text-align:center;
`
export const SireInfo = styled.div`
    max-width:1400px;
    font-size:24px;
    line-height: 100%;
    right:0;
    color:white;
    margin-left:10px;

    @media screen and (max-width: 890px){
        line-height:24px;
        font-size:21px;
    }
`
