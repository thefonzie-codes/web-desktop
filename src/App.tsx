import './App.css';
import Taskbar from './components/Taskbar.tsx';
import svg from './assets/react.svg';

import { useState } from 'react';

import Icon from './components/Icon.tsx';
import Menu from './components/Menu.tsx';
import Window from './components/Window.tsx';

function App() {

  const [ state, setState ] = useState(
    { menuSelected: false }
  )

  return (
    <div className='desktop'>
      <Menu state={state}/>
      <Icon img={svg} name="test-icon" />
      <Taskbar state={state} setState={setState}/>
      <Window url='https://thefonzie-codes.github.io/my-to-do-app/#/home' />
    </div>
  );
}

export default App;
