import React, { useState } from 'react'

function EchoesOfSchledules() {
const [pong, setPong] = useState('')
const [i, setI] = useState(0)
  const server = ()=> {
    let counter = i
    fetch("/api/ping")
    .then((response) => response.json())
    .then((jsondata) => setPong(jsondata))
    counter += 1
    setI(counter)

    
  }
  return (
    <div className="App" style={{textAlign:'center'}}>


      <p onClick={server}>Click</p>
     {i} {pong}
    </div>
  );
}

export default EchoesOfSchledules;
