import React from 'react'

const Child = ({user,setUser}) => {

  return (
    <>
      <h1>Child</h1>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h2>{user.phone}</h2>
      <h2>{user.address}</h2>
      <button onClick={() => setUser({
        name:"",
        age:100,
        phone:"01765223311",
        address:"Mars"
      })}>
         Change Data
      </button>
    </>
  )
}

export default Child