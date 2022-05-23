import React from 'react'
import { Table, InfoContainer, InfoWrapper, InfoRow,TopLine } from './CareOwnershipElements'


const CareOwnership = ({id, topLine}) => {
  return (
    <InfoContainer id={id} >

      
      <InfoWrapper>
   
          <TopLine style={{ textAlign: 'center'}}>
              {topLine}
            </TopLine>
        <InfoRow style={{color:'white'}}>
          We are proud to announce our purebred litter of 12 big blue chunky puppies; 7 boys and 5 girls.<br></br><br></br>  
          Puppies will come health checked with <div style={{color:'#5cd500' , display: 'inline' }}>first vaccinations, microchipped, wormed and flead</div>; along with a 6
          generation ICCF pedigree certificate (FCI pedigree can be provided with additional cost) and vaccination card.<br></br> <br></br> 
          Puppy contracts made by Platinum Kennels will be provided and a non-refundable deposit of £500 must be made to secure your choice of pup.<br></br> 
          Puppies will be ready to leave on 09/06/22.<br></br><br></br>
          <Table>
          <table style={{color:'#5cd500', width:'100%'}}>
            <tr>
              <th>Cost of a Male</th>
              <th>Cost of a Female</th>
            </tr>
            <tr>
              <td style={{textAlign:'center'}}>£2000</td>
              <td style={{textAlign:'center'}}>£2500</td>
            </tr>
            </table>
            </Table><br></br>
          Puppies will be weaned off mum with a balanced BARF diet; 80(Muscle Meat), 10(Bone), 10(Offal).<br></br><br></br>
          These canines require a great deal of socialisation and firm leadership due to their dominant nature - <div style={{ color: '#5cd500', display: 'inline' }}>best suited for experienced owners. </div>
          Puppies will start in house viewing at 4 weeks old (as that’s when pups become more interactive) but can be viewed sooner to those who leave a deposit. 
          <br></br><br></br>
          Photos will be updated as puppies grow.
          </InfoRow>
      </InfoWrapper>
          
    </InfoContainer>
    
  )
}

export default CareOwnership;