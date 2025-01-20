import React from 'react'
import Child from './child'

const Parent = ({user , setUser}) => {
    // console.log(user)
  return (
   <>
    <h1>Parent component</h1>
    <h1>{user.name}</h1>
    <h2>{user.age}</h2>
    <h2>{user.phone}</h2>
    <h2>{user.address}</h2>


    <Child user={user} setUser={setUser}  />
   </>
  )
}

export default Parent