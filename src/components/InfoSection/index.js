import React from 'react'
import { S, Sire2Img, ImgWrapper, StormiInfo, SireInfo, SireImg, StormiVideo, Column2, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper,TopLine, Subheading } from './InfoElements'
import sire from './../../images/sire.jpg'
import sire2 from './../../images/sire2.jpg'

const InfoSection = ({id, topLine,description}) => {
  return (
    <InfoContainer id={id}>
      
         
      <InfoWrapper style={{zIndex:'1'}}>
        <TextWrapper>
            <TopLine>
             {topLine}
          </TopLine>
          
            
        </TextWrapper>
        <S>
        <Subheading>
              {description}
            </Subheading>

        
        <InfoRow>
        
          <Column1>
            {/*autoplay and loop the issue???*/}
            {/* <StormiVideo muted src={SVideo} type='video/mp4'/> */}
            <SireImg>
              <img id="dog" src={sire} style={{
                height: '90%', width: '100%',
                      opacity:'0.90',
                      objectFit: 'cover',
                  zIndex: '1', filter: 'brightness(130%)', border: '2px solid white', borderRadius: '20px'
                  }} />
            </SireImg>
            <StormiInfo>
            Sire is an import from Serbia (and is pushing 70kg) and the Dam is an import from Bosnia and Herzegovina 
              (hence the docked ears) and weighs 45kg; both come from grand champion bloodlines well-known all over Europe.
              
              
            </StormiInfo>
            
              </Column1>
              <Column2>
            
            
          </Column2>
            <SireInfo >
   
            Dam and Sire are FCI, ICCF, KSS, KuSiBh registered; each has an FCI certified hip score of HD-A and ED-0. (Certificates can be shown upon request).
            More photos can be shown of dogs and puppies when enquiring. Pictures of both grandparents are also available to view.
            <Sire2Img>
              <img id="dog" src={sire2} style={{
                height: '100%', width: '90%',
                      opacity:'0.90',
                      objectFit: 'cover',
                       zIndex:'1', borderRadius:'20px', border:'2px solid white'
                  }} />
            </Sire2Img>
            </SireInfo>
            
              
          </InfoRow>
          </S>
      </InfoWrapper>
      
          
    </InfoContainer>
  )
}

export default InfoSection;