import './App.css';
import Header from './components/Header';
import TinderCard from 'react-tinder-card'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Router>
          {/* Header */}
          
          <Routes>
            <Route path="/" />
            <Route path="/chat" />
            <Route path="/chat" />

          </Routes>

          {/* Tinder Cards */}
          {/*  Buttons below tinder cards */}

          {/* Chat screen */}
          {/* Individual chat screen */}


        </Router>

      </header>
    </div>
  );
}

export default App;
