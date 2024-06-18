import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Altiplano from './components/pages/Altiplano';
import Valles from './components/pages/Valles';
import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/altiplano" Component={Altiplano}/>
          <Route path="/valles" Component={Valles}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
