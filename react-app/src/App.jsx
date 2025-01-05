import React from 'react'

const App = ({ person }) => {
  
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      <p>{person.age}</p>
      <p>{person.city}</p>
    </div>
  )
}

export default App