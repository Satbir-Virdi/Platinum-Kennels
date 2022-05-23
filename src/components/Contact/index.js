import React from 'react'
import { Column2, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine } from './ContactElements'

//wrapper wraps things dependenet on google maps api

import { BsInstagram, BsTelephone } from 'react-icons/bs';
import {RiMailSendLine} from 'react-icons/ri'

const Contact = ({ id, lightBG, topLine }) => {

  return (
    <InfoContainer id={id} lightBG={lightBG}>
      <InfoWrapper>
        <TextWrapper>
            <TopLine style={{gridArea:'topline', textAlign:'center'}}>
              {topLine}
          </TopLine>
         
          </TextWrapper>
        <InfoRow>
          <Column1>
          Most of our litters are reserved by 4 weeks so best to get in touch now. <br></br>
            As a qualified veterinary assistant, I am able to provide you with a lifetime of support over the phone or email 
            if any problems do occur or if any advice is needed. 

          </Column1>
          


          <Column2>
            <div style={{display:'block', height:'40px'}}><u>For any further information</u></div>
            <BsInstagram />  <a href='https://www.instagram.com/platinum_kennels/channel/'
              style={{
                color: 'white', textDecorationLine: 'none', bottom: '200px', positon:
                  'relative', display: 'inline-block'
              }}> @platinum_kennels</a><br></br>
            <BsTelephone /> 0795 1440 232 <br></br>
            <RiMailSendLine /> shush@gmail.com 
            
              </Column2>
          </InfoRow>
      </InfoWrapper>
          
    </InfoContainer>
  )
}

export default Contact;