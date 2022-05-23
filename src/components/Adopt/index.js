import React from 'react'
import { Column2, InfoContainer, InfoWrapper, InfoRow, TextWrapper,TopLine, Subheading } from './AdoptElements'
import 'firebase/firestore';
import DogItem from './DogItem'

//.. means you go up the directory chain

//async request means it takes time to complete -> cannot store in variable
// if in variable then the next statement cannot execute as variable nmay not be filled
// instead, it returns a promise that it will complete
// once data retrieved, the .then() is executed

//snapshot is a representation of the data at a given time
const Adopt = ({Dogs, toggleForm, chosenDog}) => {
  console.log(Dogs)
 
  
  // let a = useRef([]);
  // allows to store the value obtained from the useEffect
  //async only returns promise object
  // this obtains the documents from the Dogs collection
  //snapshot is the value of the data at a given time.
  //prints an array of all the documents
  
  
  return (
    <InfoContainer id="Adopt">
      <InfoWrapper>
        <TextWrapper>
            <TopLine>
              Adopt
            </TopLine>
          </TextWrapper>
        <InfoRow>
              <Column2>
            {Dogs.map((dog) => <DogItem toggleForm={toggleForm} chosenDog={chosenDog} key={dog.id} dogitem={dog} /> )}
              </Column2>
          </InfoRow>
      </InfoWrapper>
          
    </InfoContainer>
  )
}

export default Adopt;