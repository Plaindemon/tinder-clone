import './App.css';
import Header from './components/Header';
import SwipeButtons from './SwipeButtons';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TinderCards from './components/tinderCards/TinderCards';
import Chats from "./components/chat/Chats";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Header backButton="/" />
          {/* Header */}

          <Routes>

            <Route path="/chat" element={<Chats />} />
            <Route path="/tinder" element={<TinderCards />} />
            <Route path="/" />
          </Routes>

          {/* Tinder Cards */}
          {/*  Buttons below tinder cards */}
          {/* <TinderCards /> */}
          <SwipeButtons />
          {/* Chat screen */}
          {/* Individual chat screen */}


        </Router>

      </header>
    </div>
  );
}

export default App;
