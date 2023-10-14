import React, { useState } from 'react'
import Navbar from './Navbar'

const Signup=()=>{
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [conspass,setConpass]=useState("")


    const sendSignup=async() => {
        if(!name || !email || !pass || !phone || !conspass) {
            alert("please enter required area")
        }
        else{
            if(pass.length<8 && pass.length>16)
            {
                alert("password must be at least 16 characters");
            }
            else {
            if(pass === conspass){
                {
                    let res=await fetch("http://localhost:3000/signup",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        name,email,pass,phone
                    })
                })
                let data=await res.json()
                console.log(data)
                }  
            }
            else{
                alert("password not matches");
            }
        }
        }
    }
  return (
    <div>
        <Navbar/>
        <h1>Signup</h1>
        <input type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}}/><br></br>
        <input type="text" placeholder='Enter Phone' onChange={(e)=>{setPhone(e.target.value)}}/><br></br>
        <input type="text" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
        <input type="text" placeholder='Enter Password' onChange={(e)=>{setPass(e.target.value)}} /><br></br>
        <input type="text" placeholder='Enter Conform Password' onChange={(e)=>{setConpass(e.target.value)}}/><br></br>
        <button onClick={sendSignup}>Signup</button>
        

    </div>
  )
}
export default Signup
