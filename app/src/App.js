import './App.css';
import { MainRect } from './components/mainRectangle/MainRect';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRect/>
    </div>
  );
}

export default App;
