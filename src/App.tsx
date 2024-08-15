import './App.css';
import Taskbar from './components/Taskbar.tsx';
import svg from './assets/react.svg';

import Icon from './components/Icon.tsx';
import Draggable from 'react-draggable';
import DraggableWrapper from './components/DraggableWrapper.tsx';

function App() {

  return (
    <div className='desktop'>
      <DraggableWrapper img={svg} name="test-icon" />
      {/* <h1>Hi! I'm Alfonso</h1>
      <p>Full Stack Web Developer with a background of connecting clients to digital solutions</p> */}
      <Taskbar />
    </div>
  );
}

export default App;
