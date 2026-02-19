import React from 'react'
import { UserHook } from '../context/UserContext'
const UserDetails = () => {
    const {user} = UserHook()
  return (
    <div>Welcome {user} !</div>
  )
}

export default UserDetails