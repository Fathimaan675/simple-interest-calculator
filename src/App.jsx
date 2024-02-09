import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import {useState} from 'react'

function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [principleAmountvalid,setPrinciplevalid]=useState(true)
  const [rateAmountvalid,setRatevalid]=useState(true)
  const [yearAmountvalid,setYearvalid]=useState(true)
  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrinciplevalid(true)
    setRatevalid(true)
    setYearvalid(true)
  }
  const handleValidation=(e)=>{
    console.log("inside handle validation");
    const {value,name}=e
            console.log(value,name);
            console.log(!!value.match(/^[0-9]*.?[0-9]$/));
            if(!!value.match(/^\d*\.?\d+$/)){
              if(name=="principle"){
                setPrinciple(value)
                setPrinciplevalid(true)
              }else if(name=="rate"){
                setRate(value)
                setRatevalid(true)
              }else {
                setYear(value)
                setYearvalid(true)
              }
            }else{
             
                if(name=="principle"){
                  setPrinciple(value)
                  setPrinciplevalid(false)
                }else if(name=="rate"){
                  setRate(value)
                  setRatevalid(false)
                }else {
                  setYear(value)
                  setYearvalid(false)
                }
            }
  }

  const  handleCalculate =()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("please fill the form completely")
    }
  }
  return (
<div style={{width: '100%',height: '100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
  <div style={{width: '600px'}} className='bg-light p-5 rounded'>
    <h1>Simple Interest App</h1>
    <p>Calculate your simple Interest Easily</p>
    <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
      <h1>₹{interest}</h1>
      <p className='fw-bolder'>Total Simple Interest</p>
    </div>
    <form className="mt-5">
      <div className="mb-3">
       <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" varia1nt="outlined" value={principle || ""} name="principle" onChange={e=>handleValidation(e.target)} />
      </div>
   
    {!principleAmountvalid && <div className='text-danger mv-3'>invalid user input</div>} 
      <div className="mb-3">
       <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (p.a) %" variant="outlined"   value={rate || ""}name="rate" onChange={e=>handleValidation(e.target)}  />
      </div>    
        {!rateAmountvalid && <div className='text-danger mv-3'>invalid user input</div>} 
      <div className="mb-3">
       <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined"  value={year || ""} name="year" onChange={e=>handleValidation(e.target)} />
      </div>  
          {!yearAmountvalid && <div className='text-danger mv-3'>invalid user input</div>} <br />
      <Stack direction="row" spacing={2}>
        <Button onClick={handleCalculate} disabled={!principleAmountvalid || !rateAmountvalid ||!yearAmountvalid }style={{width: '50%',height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
        <Button onClick={handleReset} style={{width: '50%',height: '70px'}}  variant="outlined">RESET</Button>
      </Stack>
    </form>
  </div>  
</div> 
 )
}

export default App