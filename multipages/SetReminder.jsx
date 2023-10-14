import React, { useState } from 'react'

const SetReminder=()=>{
  const [date,setDate]=useState("")
  const [subject,setSubject]=useState("")
  const [desc,setDesc]=useState("")
  const [email,setEmail]=useState("")
  const [contact,setContact]=useState("")
  const [sms,setSms]=useState("")
  const [recur,setRecur]=useState("")

  const sendSignup=async() => {
    let res=await fetch("http://localhost:3000/reminder",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                      
                    })
                    
                })
                let data=await res.json()
                console.log(data)


  }
  return (
    <div>
      <h1>Set a new Reminder</h1>
      <input type="date" placeholder='date' onChange={(e)=>{setDate(e.target.value)}}/><br></br>
      <select onChange={(e)=>{setSubject(e.target.value)}}>
        <option>Math</option>
        <option>English</option>
        <option>Hindi</option>
      </select><br></br>
      <input type="textarea" placeholder='Description' onChange={(e)=>{setDesc(e.target.value)}}/><br></br>
      <input type="text" placeholder='Email Address' onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
      <input type="Number" placeholder='Contact' onChange={(e)=>{setContact(e.target.value)}}/><br></br>
      <input type="Number" placeholder='Sms No' onChange={(e)=>{setSms(e.target.value)}}/><br></br>
      <label for="la1">7days</label>
      <input type="checkbox" id="la1" onChange={(e)=>{setRecur(e.target.value)}}/>
      <label for="la2">5days</label>
      <input type="checkbox" id="la2" onChange={(e)=>{setRecur(e.target.value)}}/>
      <label for="la3">3 days</label>
      <input type="checkbox" id="la3" onChange={(e)=>{setRecur(e.target.value)}}/>
      <label for="la4">2 days</label>
      <input type="checkbox" id="la4" onChange={(e)=>{setRecur(e.target.value)}}/><br></br>
      <button onClick={sendSignup}>Reminder</button>
    
    </div>
  )
}
export default SetReminder
