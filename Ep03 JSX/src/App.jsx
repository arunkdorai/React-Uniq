import React, {Fragment} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function user() {
//   return "Arun", 456, true
// }

// console.log(user())

let author = "Arun"

let isLogged = false;

function App() {

  return (
    <Fragment>
    <h1 style={{backgroundColor: "red", color: "white"}}>React</h1>
    <label htmlFor="user">UserName:</label>
    <input id="user" type="text"/>
    <p>{author}</p>
    {
      isLogged && <p> Welcome to Our Website </p>
    }
    {/* { <button onClick={newFund}></button>} */}
    </Fragment>
  )
}

export default App
