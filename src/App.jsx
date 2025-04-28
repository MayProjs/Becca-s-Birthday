import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './components/Countdown';
import BirthdayPage from './components/BirthdayPage';
import './App.css';
import tvFrame from './assets/tv-frame.png';
import flowerTopLeft from './assets/flower-top-left.png';
import flowerBottomRight from './assets/flower-bottom-right.png';
// import bgPink from './assets/background-pink.png';
import bg from './assets/bg.png';


function App() {
  return (
    <Router>
      <div className="mobile-container"> 
        <Routes>
          <Route path="/" element={<Countdown durationInSeconds={10} />} />
          <Route path="/birthday" element={<BirthdayPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
