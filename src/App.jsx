import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const getmessage = async () => {
    try{
    const response = await fetch('/api/message')
    const data = await response.json()
    setMessage(data.message)
    }
    catch(error){
      console.error('Error fetching message:', error)
    }
  }
  return (
    <>
      <button onClick={getmessage}>Get Message</button>
      <p>{message}</p>
    </>
  )
}

export default App
