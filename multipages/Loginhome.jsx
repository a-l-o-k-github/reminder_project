import React, { useEffect, useState } from 'react'
import Loginnav from './Loginnav'

const Loginhome=()=>{
  const [loginarr,setLoginarr]=useState([])
  const currentuser = async() => {
    let res=await fetch('http://localhost:3000/currentuser')
    let data = await res.json()
    setLoginarr(data)
    console.log(loginarr.length);
    }
    useEffect(()=>{
      currentuser()
    },[])
  return (
    <div>
      <Loginnav/>
     <h1>Welcome to Reminder Application</h1> 
     <h1>Today is Tuesday</h1>
     <h1>14th February</h1>
      </div>
  )
}
export default Loginhome
