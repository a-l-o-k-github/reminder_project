import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Login=()=>{
  const [email, setEmail] =useState("")
const [password, setPassword] =useState("")
const [signupData,setSignUpData]=useState([])
let flag=false
let nav=useNavigate()  


const getData=async () =>{
  let res=await fetch("http://localhost:3000/signup")
  let data= await res.json()
  console.log(data)
  setSignUpData(data)
}
useEffect(()=>{
  getData()
},[])


const handleLogin = async() =>{
  for(let i=0; i<signupData.length;i++){
    if(signupData[i].email === email){
      if(signupData[i].pass === password){
        flag=true;
      let res=await fetch("http://localhost:3000/currentuser",{
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...signupData[i],
    })
  })
  let data=await res.json()
  nav("/loginhome")
      } else {
        alert("Wrong Password")
      }
      
    } 
  }


  

}
  return (
    <div>
      <Navbar/>
    <h1>Userlogin</h1>
   <label>Email id</label>
    <input type='text' placeholder='enter email ' onChange={(e)=>{setEmail(e.target.value)}}/>
    <br></br>
    <label>Password</label>
    <input type='text' placeholder='enter password ' onChange={(e)=>{setPassword(e.target.value)}}/>
    <br></br>
    <button onClick={handleLogin}>Login</button>

    </div>
  )
}
export default Login

