import './App.css';
import Categories from './components/Categories';
import LandingWelcome from './components/LandingWelcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Navbar />
        <LandingWelcome />
        <Categories />
      </div>
    </div>
  );
}

export default App;
