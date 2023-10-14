import React, { useState } from 'react'

const Modify=()=>{
  const [date,setDate]=useState("")
  const [subject,setSubject]=useState("")
  const [desc,setDesc]=useState("")
  const [email,setEmail]=useState("")
  const [contact,setContact]=useState("")
  const [sms,setSms]=useState("")
  const [recur,setRecur]=useState("")
  const [isAvail,setIsAvail]=useState("");


  async function gerReminder(){
    let res=await fetch('http://localhost:3000/reminder')
    let data=res.json()
    setIsAvail(data)
    console.log(data)
  }

  async function handleModify(){
    let res=await fetch('http://localhost:3000/modify',{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        date:data,
        subject:subject,
        desc:desc,
        email:email,
        contact:contact,
        sms:sms,
        recur:recur
      })

    })
  }


  return (
    <div>
      <h1>Modify Reminder</h1>
      <input type="date" placeholder='date' onChange={(e)=>{setDate(e.target.value)}}/><br></br>
      <label >Select subject</label>
      <select onChange={(e)=>{setSubject(e.target.value)}}>
        <option>Math</option>
        <option>English</option>
        <option>Hindi</option>
      </select><br></br>
      <label >Reminder</label>
      <select>
        <option>Math</option>
        <option>English</option>
        <option>Hindi</option>
      </select><br></br>
      <input type="text" placeholder='Description' onChange={(e)=>{setDesc(e.target.value)}}/><br></br>
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
      <button onClick={handleModify}>Reminder</button>
    </div>
  )
}
export default Modify
