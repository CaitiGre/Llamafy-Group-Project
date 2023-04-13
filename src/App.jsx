import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/landingPage';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './components/RegistrationPage/Registration';
import LoginPage from './components/LoginPage/LoginPage';
import WardrobeSelection from './components/WardrobeSelection/WardrobeSelection';
import Navbar from './components/Navbar/Navbar';
import SettingsPage from './components/SettingsPage';
import SettingsSubPage from './components/Profile';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        
        <Routes>
          <Route path="/" element={<LandingPage />}/>
            <Route path="home" element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="wardrobeSelection" element={<WardrobeSelection />}/>
            <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;