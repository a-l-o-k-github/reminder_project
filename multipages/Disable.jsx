import React, { useState } from 'react'

const Disable=()=>{
  const [date,setDate]=useState("");
  const [subject,setSubject]=useState("");
  const [remine,setRemine]=useState("");
  const [desc,setDesc]=useState("");
  const [isAvail,setIsAvail]=useState("")


  async function gerReminder(){
    let res=await fetch('http://localhost:3000/reminder')
    let data=res.json()
    setIsAvail(data)
    console.log(data)
  }

  async function handleModify(){
    let res=await fetch('ttp://localhost:3000/disable',{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        date:data,
        subject:subject,
        desc:desc,
        subject:subject
      })

    })
  }
  return (
    
    <div>
      <h1>Disable Reminder</h1>
      <input type="date" placeholder='Enter Date' onChange={(e)=>{setDate(e.target.value)}}/><br></br>
      <label>Subject</label>
      <select onChange={(e)=>{setSubject(e.target.value)}}>
      <option>Telgu</option>
      <option>Urdu</option>
      </select><br></br>
      <label>Reminder</label>
      <select onChange={(e)=>{setRemine(e.target.value)}}>
      <option>Alok</option>
      <option>Rosan</option>
      </select><br></br>
      
      <input type="textarea" placeholder='Description' onChange={(e)=>{setDesc(e.target.value)}}/><br></br>
      <button onClick={handleModify}>Disable</button>
    </div>
  )
}
export default Disable
