import './App.css';
import Taskbar from './components/Taskbar.tsx';
import petomeicon from './assets/petomeicon.png'
import resumeicon from './assets/file-pdf-solid.svg'
import checkicon from './assets/check.svg'

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
      <DoneIcon img={checkicon} appName="Done!" />
      <ResumeIcon img={resumeicon} appName='Resume'/>
      <PetomeIcon img={petomeicon} appName='Petome' />
      <WindowsList />
      <Taskbar state={state} setState={setState}/>
    </div>
  );
}

export default App;