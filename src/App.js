import {Routes, Route} from 'react-router-dom'
import './App.css';
import NavBars from './NavBars';
import Home from './Home';
import Insurance from './Insurance'
import CreditCard from './CreditCard';
import Loans from './Loans';
import MicroSavings from './MicroSavings';
import RealEstate from './RealEstate';
import JobQueries from './JobQueries';
import Missing from './Missing';
import SignUp from './SignUp';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("" || [])
  const [number, setNumber] = useState(0 || [])
  const [altNumber, setAltNumber] = useState(0 || [])
  const [place, setPlace] = useState("" || [])
  const [district, setDistrict] = useState("" || [])

  function submitHandler(e){
    e.preventDefault()
    console.log(e.name);
    console.log(e.setName);
    console.log(e);
  }
  return (
    <div>      
      <NavBars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CreditCard' element={
        <CreditCard 
          name = {name}
          setName = {setName}
          number = {number}
          setNumber = {setNumber}
          altNumber = {altNumber}
          setAltNumber = {setAltNumber}
          place = {place}
          setPlace = {setPlace}
          district = {district}
          setDistrict = {setDistrict}
          submitHandler = {submitHandler}

        />} />
        <Route path='/Insurance' element={<Insurance />} />
        <Route path='/Loans' element={<Loans />} />
        <Route path='/MicroSavings' element={<MicroSavings />} />
        <Route path='/RealEstate' element={<RealEstate />} />
        <Route path='/JobQueries' element={<JobQueries />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/*' element={<Missing />} />        
        </Routes>      
    </div>
  );
}

export default App;
