import React from 'react'
import { useState } from 'react'
import { UserHook } from '../context/UserContext'

const UserForm = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const{user,setUser}=UserHook()

    const handleSubmit=()=>{
        console.log("Username: ",username)
        console.log("Password: ",password)
        console.log("User from context: ",user)
        setUser(username)
        console.log("User from context after update: ",user)
    }
  return (
    <div>
        <h1>User Form </h1>
        <input 
        type="text" 
        id='username'
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input 
        type="password"
        id='password'
        onChange={(e)=>setPassword(e.target.value)} 
         />
        <button
        onClick={handleSubmit}
        >Submit</button>
        </div>
  )
}

export default UserForm