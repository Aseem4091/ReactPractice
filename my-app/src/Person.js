import React from 'react'

function Person({names}) {
  return (
    <div><h2>My name is {names.name}. My age is {names.age}.My Proffesion is {names.occupation}. I live in {names.location}</h2></div>
  )
}

export default Person