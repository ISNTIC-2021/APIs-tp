import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // Method with Axios
const [users,setUsers] = useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((reponse)=>{setUsers(reponse.data)})
})

// Method with fetch
const [utilisateurs,setutilisateurs] = useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((reponse)=>{return reponse.json()})
  .then((utilisateurs)=>{setutilisateurs(utilisateurs)})
})


  return (
    <>
    <h1>First Method with Axios</h1>
      {
        
        users.map((users,index)=>{
          return <p key={index}>{users.name}</p>
        })
      }
    <h1>Second Method with fetch</h1>
    {
        
        utilisateurs.map((utilisateurs,index)=>{
          return <p key={index}>{utilisateurs.name}</p>
        })
      }
    </>
  )
}

export default App