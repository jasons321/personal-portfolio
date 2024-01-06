import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction/introduction';
import About from './components/about/about';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <About></About>
    </div>
  );
}

export default App;
