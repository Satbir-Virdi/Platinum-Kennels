import React from "react";
import {DogItemContent, AdoptButton, TextWrapper, Price, Age, ImgWrapper, Name, DogItemWrapper, Description, Img} from './DogItemElements'
import { Timestamp } from "firebase/firestore";

export const DogItem = ({ dogitem, toggleForm, chosenDog }) => {
    console.log(dogitem);

    //Do not pass the dogitem as a parameter.
    const AdoptFunction = () => {
        chosenDog(dogitem); 
        toggleForm();
    }

    return (
        <DogItemWrapper>
            <DogItemContent>
            <ImgWrapper className='dogImage'>
                <Img src={dogitem.url}/>
            </ImgWrapper>
            <TextWrapper>
                <Name><div style={{textDecoration:'underline', display:'inline'}}>Name:</div> {dogitem.Name}</Name>
                    <Age><div style={{ textDecoration: 'underline', display: 'inline' }}>Age:</div> {new Timestamp(dogitem.Age.seconds, 0).toDate().toLocaleDateString("en-US")}</Age>
                <Price><div style={{textDecoration:'underline', display:'inline'}}>Price:</div> £{dogitem.Price}</Price>
                <Description><div style={{textDecoration:'underline', display:'inline'}}>Description:</div> <br></br>{dogitem.Description}</Description>
                    <AdoptButton onClick={AdoptFunction}>Inquire</AdoptButton>
                </TextWrapper>
            </DogItemContent>
        </DogItemWrapper>
      
    )
}

export default DogItem;