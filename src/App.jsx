import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/landingPage';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './components/RegistrationPage/Registration';
import LoginPage from './components/LoginPage/LoginPage';
import WardrobeSelection from './components/WardrobeSelection/WardrobeSelection';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
            <Route path="home" element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="wardrobeSelection" element={<WardrobeSelection />}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;