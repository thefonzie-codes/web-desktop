// import { useState } from 'react'
import './App.css';
import Nav from './components/Nav.tsx';
import BoxCanvas from './three.js/Box.tsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <h1>Hi! I'm Alfonso</h1>
      <BoxCanvas />
      <p>And I copy pasted all this code to make these boxes spin around</p>
    </>
  );
}

export default App;
