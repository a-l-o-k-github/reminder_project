import React from 'react'
import {Route,Routes} from "react-router-dom"
import Homepage from './Homepage'
import Signup from './Signup'
import Navbar from './Navbar'
import Login from './Login'
import Loginhome from './Loginhome'
import Loginnav from './Loginnav'
import SetReminder from './SetReminder'
import Modify from './Modify'
import Disable from './Disable'
import Delete from './Delete'
import Unable from './Unable'
import View from './View'
import Logout from './Logout'
const Allrouter=()=>{
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/nav" element={<Navbar/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/loginhome" element={<Loginhome/>}></Route>
        <Route path="/loginave" element={<Loginnav/>}></Route>
        <Route path="/set" element={<SetReminder/>}></Route>
        <Route path="/modify" element={<Modify/>}></Route>
        <Route path="/disable" element={<Disable/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
        <Route path="/unable" element={<Unable/>}></Route>
        <Route path="/view" element={<View/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>

    </Routes>
  )
}
export default Allrouter
