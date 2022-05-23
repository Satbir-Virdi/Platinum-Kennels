import styled from "styled-components";


export const DogItemWrapper = styled.div`
    background-color: #6b2d38;
    padding: 10px 20px;
    border:solid;
    border-color:white;
    width:auto;
    height:auto;
    margin-bottom:5%;
    border-radius:10px;


`
export const TextWrapper = styled.div`
    grid-area:text;
    color:white;
    width:60%;
    margin-left:5%;
    margin-bottom:20px;
  
    position:relative;

`
export const Description = styled.div`
    height:45%;
    overflow:auto;

    @media screen and (max-width:768px){
        font-size:14px;
    }
  
`

export const Img = styled.img`
    max-width: 400px;
    max-height:400px;
    height:90%;
    width:100%;

    grid-area:image;
    object-fit:cover;
    overflow:hidden;
    border-radius:5px;

`

export const Name = styled.div`
    position:relative;

`

export const ImgWrapper = styled.div`
    object-fit:contain;

`

export const Age = styled.div``

export const Price = styled.div``

export const AdoptButton = styled.div`
    background-color: #413f47;
    border-radius:10px;
    border: 2px;
    border-style:solid;
    border-color:#9eb5a4;
    text-align:center;
    margin-top:5%;
    position:absolute;
    left:5%;
    bottom:-13%;
    width:50%;
   
    
    @media screen and (min-width:520px){
        bottom:-6%;
    }

    @media screen and (min-width:768){
        bottom:0%;
    }

    &:hover{
        border-color: #798a7d;
        background-color:#adccb3;
        cursor: pointer;
    }

`

export const DogItemContent = styled.div`
    position:relative;
    width:100%;
    font-size:24px;
    margin:auto;
    margin-top:0.5%;
    display:flex;
  
    

    @media screen and (max-width:768px){
        font-size:18px;
    }
`