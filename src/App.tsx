import './App.css';
import LandingWelcome from './components/LandingWelcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Navbar />
        <LandingWelcome />
      </div>
    </div>
  );
}

export default App;
