import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';


export const FormWrap = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    display: grid;
    align-items:center;
    padding:10px 10px;
    opacity:${({ isFormOpen }) => (isFormOpen ? '97%' : '0')};
    z-index:${({ isFormOpen }) => (isFormOpen ? '999' : '0')};
    top:${({ isFormOpen }) => (isFormOpen ? '0' : '-100%')}; 
    transition: 0.7s ease-in-out;
`

export const FormBody = styled.div`
    position:relative;
    height:90%;
    margin-right:20px;
    margin-left:20px;
    background-color:#5f9a96;
    padding:20px 40px;
    border-radius:20px;
`
export const CloseIcon = styled(FaTimes)`
    color:white;
    position:relative;
    cursor:pointer; //changes the cursor to other things
    opacity:0.7;
`
export const Icon = styled.div`
    position:fixed;
    z-index:1000;
    top:2.9rem;
    right:2.7rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
`
export const FormName = styled.input`
    border-radius:17px;
    display:flex;
    font-size:1.8rem;
    width:100%;
    padding:5px 10px;
    background-color:#ededf7;
    cursor:text;
    margin-top:20px;
    margin-bottom:20px;

    &:hover{
        background-color:#e6f5ea;
    }
`
export const FormEmail = styled(FormName)`
`

export const FormNumber = styled(FormName)`
`

export const FormAddress = styled(FormName)`
`

export const FormPostcode = styled(FormName)`
`
export const SubmitWrapper = styled.div`
    positon:absolute;
    margin:auto;
    width:50%;
`

export const Submit = styled.button`
    position:absolute;
    font-size:1.8rem;
    width:50%;
    padding:20px 20px;
    margin:auto;
    
    justify-content:center;
   
    cursor:pointer;
    border-radius:20px;
    background-color:#ededf7;
    &:hover{
        background-color:white;
    }
`

export const FormMain = styled.div`
`