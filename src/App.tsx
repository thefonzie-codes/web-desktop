import './App.css';
import Taskbar from './components/Taskbar.tsx';
import svg from './assets/react.svg';

import { useState } from 'react';

import Icon from './components/Icon.tsx';
import Icon2 from './components/Icon2.tsx';
import Menu from './components/Menu.tsx';
import Window from './components/Window.tsx';

function App() {

  const [ state, setState ] = useState({ 
    menuSelected: false,
    windowOpen: false,
    petomeWindowOpen: false,
  })

  return (
    <div className='desktop'>
      <Menu state={state}/>
      <Icon img={svg} name="Done!" state={state} setState={setState}/>
      <Icon2 img={svg} name="Petome" state={state} setState={setState}/>
      <Taskbar state={state} setState={setState}/>
      {state.windowOpen && <Window 
        state={state} 
        setState={setState} 
        url='https://thefonzie-codes.github.io/my-to-do-app/#/home' />}
      {state.petomeWindowOpen && <Window 
        state={state} 
        setState={setState} 
        url='https://petome.up.railway.app/' />}
    </div>
  );
}

export default App;
