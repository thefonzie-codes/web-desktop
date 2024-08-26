import './App.css';
import Taskbar from './components/Taskbar.tsx';
import svg from './assets/react.svg';

import { useState } from 'react';

import DoneIcon from './components/Icons/DoneIcon.tsx';
import WindowsList from './components/WindowsList.tsx';
import ResumeIcon from './components/Icons/ResumeIcon.tsx';
import PetomeIcon from './components/Icons/PetomeIcon.tsx'
// import Menu from './components/Menu.tsx';
// import { useAppSelector, useAppDispatch } from './app/hooks';

function App() {

//   const apps = useAppSelector(state => state.apps.openApps)

  const [ state, setState ] = useState({ 
    menuSelected: false,
  })

  return (
    <div className='desktop'>
      <DoneIcon img={svg} appName="Done!" />
      <ResumeIcon img={svg} appName='Resume'/>
      <PetomeIcon img={svg} appName='Petome' />
      <WindowsList />
      <Taskbar state={state} setState={setState}/>
    </div>
  );
}

export default App;
