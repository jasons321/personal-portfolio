import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction/introduction';
import About from './components/about/about';
import Skills from './components/skills/skills';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
