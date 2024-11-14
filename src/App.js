import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Games from './Games';
import Videos from './Videos';
import ChatBot from './ChatBot';
import ComingSoon from './ComingSoon';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
