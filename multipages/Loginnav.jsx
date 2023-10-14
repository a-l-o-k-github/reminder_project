import React, { useEffect, useState } from 'react'

const Loginnav=()=>{
    const [login,setLogin]=useState("")

    async function getLogin(){
        let res=await fetch('http://localhost:3000/currentuser')
        let data= await res.json()
        setLogin(data)
    }
    useEffect(()=>{
        getLogin()
    },[])
  return (
    <div>
        <ul>
            <a href="/set">SetReminder</a>
            <a href="/modify">ModifyReminder</a>
            <a href="/disable">DisableReminder</a>
            <a href="/delete">DeleteReminder</a>
            <a href="/unable">UnableReminder</a>
            <a href="/view">ViewReminder</a>
            <a href="/logout">Logout</a>
        </ul>
    </div>
  )
}
export default Loginnav
