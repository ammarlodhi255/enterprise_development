import './App.css';
import Greeting from './Components/Greeting';
import React, { useState } from 'react';


function App() {

  const [name, setName] = useState("Ammar");

  const changeName = () => {
    if (name == "Ammar")
      setName("Ahmed");
    else 
      setName("Ammar");
  }

  return (
    <div className="App">
      <Greeting name={name} />
      <button onClick={changeName}>Change</button>
    </div>
  );
}

export default App;
