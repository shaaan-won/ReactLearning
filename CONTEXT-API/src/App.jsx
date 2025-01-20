import React, { createContext, useContext, useState } from 'react'
import Parent from './components/Parent'
import ConParent from './contextComponent/ConParent';
import Todolist from './ToDoList/Todolist';


export const UserContext= createContext()
const App = () => {


  const [user, setUser]= useState({
    name:"Hasan",
    age:30,
    phone:"01765223311",
    address:"Dhaka"
  })
  return (
    <>
      {/* <UserContext.Provider value={{user, setUser}}>
        <ConParent />
      </UserContext.Provider> */}
      <Todolist />
      {/* <Parent user={user} setUser={setUser}/> */}
    </>
  )
}

export default App