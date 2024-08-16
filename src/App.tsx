import './App.css';
import Taskbar from './components/Taskbar.tsx';
import svg from './assets/react.svg';

import { useState } from 'react';

import DraggableWrapper from './components/DraggableWrapper.tsx';
import Menu from './components/Menu.tsx';

function App() {

  const [ state, setState ] = useState(
    { menuSelected: false }
  )

  return (
    <div className='desktop'>
      <Menu state={state}/>
      <DraggableWrapper img={svg} name="test-icon" />
      <Taskbar state={state} setState={setState}/>
    </div>
  );
}

export default App;
