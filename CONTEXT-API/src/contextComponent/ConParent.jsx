import React, { useContext } from 'react'
import ConChild from './ConChild'
import { UserContext } from '../App'

const ConParent = () => {
   const {user,setUser}= useContext(UserContext)

   const chengeUser=()=>{
      setUser({
        name:"",
        age:100,
        phone:"not reacheble",
        address:"mars"
      })

      console.log(user);
   }

  return (
    <>
     <h1>This is context parent</h1>
     <h1>{user.name}</h1>
     <h1>{user.age}</h1>
     <h1>{user.phone}</h1>
     <h1>{user.address}</h1>
    <button onClick={()=> chengeUser()}>Change User</button>
    

     
      

    <ConChild/>
    </>
  )
}

export default ConParent