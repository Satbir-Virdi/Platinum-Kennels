import React from "react";
import { Icon, SubmitWrapper, Submit, FormAddress, FormPostcode, FormName,FormEmail,FormNumber,FormMain, FormWrap, FormBody,CloseIcon } from './PopupFormElements'
import selectedDog from './../../pages/index'
import { useState } from "react";
import { isValid } from 'postcode';
import { send } from "emailjs-com";
import { Timestamp } from "firebase/firestore";

//{...data} the ellipses spreads the data in the array
const PopupForm = ({ isFormOpen, toggleForm, selectedDog }) => {

    const [userDetails, setUserDetails] = useState({ Name: '', Email: '', Number: '', Address: '', Postcode: '', DogName: '',
        DogPrice: 0, DogBirthDate: 0, DogDescription: ''
    })
    
   
    
    const validateName = () => {
        if (userDetails.Name === '') {
            alert(`Please Give Your Full Name`);
            return false;
        }
        return true;
    }

    const validateEmail = () => {
        if (userDetails.Email.includes('@') && userDetails.Email.includes('.com')) {
            return true;
        } 
        alert(`Enter valid Email`);
        return false;
    }

    const validNumber = () => {
        if (userDetails.Number.length === 11) {
            return true;
        }
        alert(`Enter Valid Phone Number`)
        return false;
    }

    const validPostcode = () => {
        if (isValid(userDetails.Postcode)) {
            return true;
        }
        alert(`Enter Valid Postcode`)
        return false;
    }

    const validAddress = () => {
        if (userDetails.Address !== '') {
            return true;
        }
        alert(`Enter Valid Adderss`)
        return false;
    }

    const submitEmail = () => {
        send(
            'service_0plyshj',
            'template_i0m9mdj',
            userDetails,
            'CBztW15TNXFDHEN8T'
        ).then((response) => {
            console.log('YAY!')
        }).catch((err) => {
            console.log(err)
        })
    }


    const handleSubmit = () => {
        if (validateName() && validateEmail() && validNumber() && validPostcode() && validAddress()) {
            // console.log("------------------")
            // console.log(userDetails.DogName)
            // console.log(userDetails.DogPrice)
            // console.log(userDetails.DogBirthDate)
            // console.log(userDetails)
            submitEmail();
            toggleForm();

            alert(`A request for the adoption of ${selectedDog.Name} has been sent`)        }
    }


    return (
        
        <FormWrap isFormOpen={isFormOpen}>
            <Icon>
                <CloseIcon onClick={toggleForm}/>
            </Icon>
            
            <FormBody>
                Adopt Dog:
                <FormMain onSubmit={handleSubmit}>
                    {/* the default value is the start value */}
                    {/*the onChange function sets the user details but updates the relvant key with the target.value ie the input*/}
    
                    <FormName name="Name" defaultValue={userDetails.Name}
                        onChange={(e) => setUserDetails
                            ({
                                ...userDetails, Name: e.target.value, DogName: selectedDog.Name, DogPrice: selectedDog.Price,
                                DogBirthDate: new Timestamp(selectedDog.Age.seconds, 0).toDate().toLocaleDateString("en-US"), DogDescription: selectedDog.Description
                            })} placeholder="Full Name" />
                    <FormEmail name="Email" defaultValue={userDetails.Email}
                        onChange={(e) => setUserDetails({ ...userDetails, Email: e.target.value })} placeholder="Email Address" />
                    {/*the validity checks the input matches the pattern provided*/}
                    <FormNumber name="Number" type="text"
                        pattern="[0-9]*" defaultValue={userDetails.Number}
                        onChange={(e) => (e.target.validity.valid ? setUserDetails({ ...userDetails, Number: e.target.value }) : null)}
                        placeholder="Phone Number" />
                    <FormAddress name="Address" defaultValue={userDetails.Address}
                        onChange={(e) => setUserDetails({ ...userDetails, Address: e.target.value })} placeholder="Home Address" />
                    <FormPostcode name="Postcode" defaultValue={userDetails.Postcode}
                        onChange={(e) => setUserDetails({ ...userDetails, Postcode: e.target.value })} placeholder="Postcode" />
                <SubmitWrapper>
                    <Submit type="submit" onClick={handleSubmit}>Confirm Request</Submit>
                </SubmitWrapper>    
                

                </FormMain>

            </FormBody>
        </FormWrap>

    )
}

export default PopupForm;