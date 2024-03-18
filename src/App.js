import React, { useState } from 'react';
import axios from "axios"

function App() {
  const [counter, setCounter] = useState (0);
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");
  function addone() {
    setCounter (counter+1)
  }
  async function sendLogin(username, password) {
    const data = {username: username, password: password};
    console.log(data)
    await axios.post(
      "http://localhost:3000/",
      "alli",
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  return (
    <div>
      <h1>Productivity Pro App</h1>
      <p>Hopefully this is running on your end</p>
      <p>-nic</p>
      <b>alli</b>
      <h1>{counter}</h1>
      <button onClick={addone}>click me</button><br></br>
      <h2>username</h2>
      <input value={username}onChange={(newValue)=>{setUsername(newValue.target.value)}}></input>
      <h2>password</h2>
      <input value={password}onChange={(newValue)=>{setPassword(newValue.target.value)}}></input>
      <button onClick={()=>{sendLogin(username, password)}}>login</button>
    </div>
  );
}

export default App;