import React from "react";
import { I, ProcessInfoWrapper, ProcessBody, Topline, InfoRow } from "./ProcessElements";


const Process = () => {

return (
    <ProcessInfoWrapper id="Process">
        <ProcessBody>
            <Topline>
                Process & Agreement
            </Topline>
            <InfoRow style={{ maxHeight:'790px'}}>
            <b><I>1.1</I></b><br></br>The Puppy sold under this contract is the Puppy that the Buyer has previously selected.<br></br><br></br>
            <b><I>1.2</I></b><br></br> The breeder agrees to take the puppy to the vet for a general health check, to receive <I>worming/flea treatment</I>,
                to be <I>microchipped</I> and receive <I>first vaccinations</I> before he/she is sold. (Health and vaccination card included as proof)<br></br><br></br>
            <b><I>1.3</I></b><br></br> That the buyer is purchasing the puppy for himself/herself and <I>not</I> as agent for a third party.<br></br><br></br>
            <b><I>1.4</I></b><br></br>  The buyer will give a <I>non-refundable</I> deposit of £500 when reserving the puppy.<br></br><br></br>
            <b><I>1.5</I></b><br></br>  The buyer will provide the remaining balance (documented below) on collection of the puppy.<br></br><br></br>
            <b><I>1.6</I></b><br></br>  Should the puppy encounter any problems under the care of the breeder, the buyer
                        has full rights to <I>all</I> reimbursements if requested.<br></br><br></br>
                <b><I>1.7</I></b><br></br>  If the puppy encounters any health problems which are <I>hereditary or pre-existing </I>
                within the first 7 days of collection, the breeder agrees to take the puppy back with evidence of the health issue. <br></br>The buyer will then receive a full refund.
                If the puppy encounters any issues in the care of the buyer the breeder takes no responsibility.<br></br><br></br>
                (We strongly suggest taking your puppy to your local vet on the first day of collection for a full health check to ensure your puppy’s health.)<br></br><br></br>
            <b><I>1.8</I></b><br></br>  All our dogs are <I>certified</I> as free of hip and elbow dysplasia which have been x-rayed by an orthopaedic veterinary surgeon
                with top scores: HD-A ED-0 (scored by the Federation Cynologique Internationale) and come from many generations of dogs who are also free of hip dysplasia.<br></br><br></br>
                This however, <I>does not guarantee</I> the health of your puppy’s hips and elbows but highly reduces the chances of hip and elbow
                dysplasia. The breeder does not take any responsibility if your puppy grows to have
                hip or elbow problems.<br></br><br></br>
            <b><I>1.9</I></b><br></br>  On collection of your puppy, you must examine him/her thoroughly as once you
            leave no return can be made due to physical features such as; Jaw structure, coat colour.

            </InfoRow>




        </ProcessBody>
    </ProcessInfoWrapper>



)}

export default Process;