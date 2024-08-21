import './App.css';
import Taskbar from './components/Taskbar.tsx';
import svg from './assets/react.svg';

import { useState } from 'react';

import Icon from './components/Icon.tsx';
import WindowsList from './components/WindowsList.tsx';
import Menu from './components/Menu.tsx';

import { useAppSelector, useAppDispatch } from './app/hooks';

function App() {

//   const apps = useAppSelector(state => state.apps.openApps)

  const [ state, setState ] = useState({ 
    menuSelected: false,
  })

  return (
    <div className='desktop'>
      <Menu state={state}/>
      <Icon img={svg} appName="Done!"/>
      {/* <Icon2 img={svg} name="Petome" state={state} setState={setState}/> */}
      <WindowsList />
      <Taskbar state={state} setState={setState}/>
    </div>
  );
}

export default App;
