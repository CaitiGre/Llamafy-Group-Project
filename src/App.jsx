import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage/Registration';
import LandingPage from './components/landingPage';


function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Move everything other than Landing Page as outlet in NavBar?*/}
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;