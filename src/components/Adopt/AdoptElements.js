import styled from "styled-components";

export const InfoContainer = styled.div`
    background-color: #4f0d19;
    overflow:scroll;

`
export const InfoWrapper = styled.div`
    display:grid;
    z-index: 1;
    height: 860px;
    max-width: 1400px;
    justify-content:center;
    padding:0px 24px;
`

export const InfoRow = styled.div`
    display: grid;
    max-width:1400px;
   

    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'topline topline topline' 'col2 col2 col2'`)};

`

export const Column2 = styled.div`
    grid-area: col2;
  
    position:relative;
    justify-content:center;
    margin-left:10px;
    margin-right:10px;


`

export const TextWrapper = styled.div`
    max-width:1400px;
    padding-top:0;
   
`

export const TopLine = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 15;
    margin-bottom: 10px;
    text-align:center;
    grid-area:topline;


    @media screen and (max-width:768px){
        font-size:32px;
    }
`

