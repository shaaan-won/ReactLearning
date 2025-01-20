import React, { useContext } from 'react'
import { UserContext } from '../App';

const ConChild = () => {

   const { user } = useContext(UserContext)

   // console.log(user);


   return (
      <>
         <h1>This is context child</h1>
         <h1>{user.name}</h1>
         <h1>{user.age}</h1>
         <h1>{user.phone}</h1>

      </>
   )
}

export default ConChild