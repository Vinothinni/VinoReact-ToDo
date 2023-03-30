import React from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from './App'

function About() {
  const {user_id = 1} = useParams()
  console.log(user_id);
  return (
    <>
     <Nav/>
    <div>
        <h1>About</h1>
    </div>
    </>
   
  )
}

export default About