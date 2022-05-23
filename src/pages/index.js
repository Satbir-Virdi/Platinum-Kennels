import React, {useState} from 'react' //lets us track state in a function call
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import InfoSection from '../components/InfoSection'
import { SectionOneData } from '../components/InfoSection/Data'
import CareOwnership from '../components/CareOwnership/index.js'
import { CareOwnershipInfo } from '../components/CareOwnership/Data'
import Contact from '../components/Contact'
import { ContactInfo } from '../components/Contact/Data'
import Adopt from '../components/Adopt'
import { db } from '../Firebase';
import { useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import PopupForm from '../components/PopupForm'
import Process from '../components/Process'

// pass parameters to these react components.
// Declare state variable isOpen, its associated function setIsOpen, start value provided by useState = false
// function toggle takes no parameters and swaps the value of the state variable, like global variable

//App.js runs the Home js, this sets the variables and then calls the sidebar and navbar
const Home = () => {
  //global variable for chosen dog
  const [selectedDog, setselectedDog] = useState([])

  //get the dog information
  const [Dogs, setDogs] = useState([])

  //this obtains the information for the chosen dog when its Adopt button is selected
  const chosenDog = (dog) => {
    // console.log(dog.Name);
    setselectedDog(dog)
    // console.log(selectedDog)
    // console.log(selectedDog.Name)
  }

  //The asynchronous function obtains all the dogs from Firebase. It takes tome to complete, hence should be async
  const getDogs = async () => {
    const dogs = await getDocs(collection(db, "Dogs"))
    let dogsArray = []
    dogs.forEach((doc) => {
      dogsArray.push({ ...doc.data() })
    })
    setDogs(dogsArray)
  }

  useEffect(() => {
    getDogs();
  }, [])

  //these toggle the sidebar and the adoption forms
  const [isOpen, setIsOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const toggleForm = (dog) => {
    setIsFormOpen(!isFormOpen)
  }
  
  
  return (
    <>
      
      <Sidebar isOpen={isOpen} toggle={toggle} />
      
      <Navbar toggle={toggle} />
      <SectionOne />
      <InfoSection {...SectionOneData}/>
      <CareOwnership {...CareOwnershipInfo} />
      <Process />
      <Adopt Dogs={Dogs} toggleForm={toggleForm} chosenDog={chosenDog}/>
      <PopupForm isFormOpen={isFormOpen} toggleForm={toggleForm} selectedDog={selectedDog}/>
      <Contact {...ContactInfo}/>
    </>
  )
}
//{...name} -> passes an 'object' to the js file which can access its attributes 
// in said file, you then write the attributes of the object that are used
//names of the 'export default----' should be same name as folder
export default Home;