import React, { createContext, useState } from 'react'

export const userContext = createContext();


  

const UsercontextProvider = ({children}) => {
    
  const [user,setUser] = useState({name: "Example", age:30})

  return (<div>

    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  </div>
  )
}
export default UsercontextProvider