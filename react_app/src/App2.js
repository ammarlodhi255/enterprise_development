import './App.css';
import ClickCounter from './Components/ClickCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import ComponentA from './Components/ComponentA';
import Counter from './Components/Counter';
import HoverCountTwo from './Components/HoverCountTwo';
import { UserProvider } from './Components/UserContext';
import { useState } from 'react';
import React from 'react';
import CounterWithReducer from './Components/CounterWithReducer';
import HoverCount from './Components/HoverCount';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FilterProducts from './Components/FilterProducts';

export const PersonContext = React.createContext();

function App() {

  // const [ name, setName ] = useState('Ammar');

  // const changeName = (name) => {
  //   setName(name);
  // }

  return (
    <div className="App">
      {/* <ClickCounter /> */}
        {/* <Counter 
          render={ (count, incrementCount) => 
          <ClickCounterTwo count={count} incrementCount={incrementCount} /> } /> 
        
        <Counter 
        render={ (count, incrementCount) => 
        <HoverCountTwo count={count} incrementCount={incrementCount} /> } /> 
      <h2>This is the End of the Page</h2> */}

      <Navbar />
      <UserProvider value={'Ammar'}>
          <PersonContext.Provider value='Mr. Somebody'>
            <ComponentA />
            {/* <button onClick={ () => changeName('Ahmed') }>Change Name</button> */}
          </PersonContext.Provider>
        </UserProvider>

      <Routes>
        <Route path='/' />
        <Route path='counterRed' element={<CounterWithReducer />} />
        <Route path='counterHover' element={<HoverCount />} />
      </Routes>   

      <FilterProducts />
      {/* <Counter>
        {
          (count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        }
      </Counter> */}
    </div>
  );
}

export default App;
