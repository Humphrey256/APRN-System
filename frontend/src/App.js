import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UploadImage from './components/UploadImage';
import Results from './components/Results';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UploadImage" element={<UploadImage />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
