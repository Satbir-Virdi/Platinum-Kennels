import React from 'react'
import { LearnMoreIcon, LearnMore, Smart, Staunch, Strong, SectionOneBG, SectionOneContainer , SectionOneText, SectionOneP, SectionOneH1} from './SectionOneElements'
import Dog from  '../../images/CaneCorsoMain.jpg'
import { IoIosArrowDown } from 'react-icons/io';


const SectionOne = () => {
    return (
      <SectionOneContainer id="SectionOne"> 
          <SectionOneBG>
                  <img id="dog" src={Dog} style={{
                      height: '1200%', width: '100%',
                      opacity: '0.3',
                      height: '100%', objectFit: 'cover',
                      position: 'sticky', objectPosition: '0% 0%', 
                  }} />
      
          </SectionOneBG>
          <SectionOneText> {/* make own h1 tags and all dat */}
              <SectionOneH1 id="h1">
                    <Smart>Smart.</Smart> <Staunch>Staunch.</Staunch> <Strong>Strong.</Strong>
              </SectionOneH1>
              <SectionOneP>
                  
                    Powerful hunters and faithful guards.<br></br>
                    A Cane Corso is an athletic and noble Mastiff.<br></br>
                    They require a firm leader to guide them.<br></br>
                </SectionOneP>
                
                <LearnMore to="About" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Learn More
                <LearnMoreIcon>
                    <IoIosArrowDown/>
                </LearnMoreIcon>
            </LearnMore>
            </SectionOneText>
            
    </SectionOneContainer>
  )
}

export default SectionOne

//containers are used to set a common set of properties for the component
//tag for background
//something is undefined, there is no react component (css) for it