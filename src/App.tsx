import './App.css';
import BoxCanvas from './three.js/Box.tsx';
import Button from 'react-bootstrap/Button';
import CustomNav from './components/Nav.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <CustomNav />
      <h1>Hi! I'm Alfonso</h1>
      <BoxCanvas />
      <p>Full Stack Web Developer with a background of connecting clients to digital solutions</p>
      <Button>It's a Button</Button>
    </>
  );
}

export default App;
