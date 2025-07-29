import React, { useContext } from 'react'
import UsercontextProvider, { userContext } from '../context/UsercontextProvider'

export const Child3 = () => {
    const[user,setUser] = useContext(userContext)
  return (
    <div>
        {user.name}
    </div>
  )
}
