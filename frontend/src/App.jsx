import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/landingPage';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './components/RegistrationPage/Registration';
import LoginPage from './components/LoginPage/LoginPage';
import WardrobeSelection from './components/WardrobeSelection/WardrobeSelection';
import Navbar from './components/Navbar/Navbar';
import SettingsPage from './components/SettingsPage/SettingsPage';
import OutfitOfTheDay from './components/OutfitOfTheDay/OutfitOfTheDay';
import Disclaimers from "./components/Disclaimers/Disclaimer";
import AuthContext from './AuthContext';
import { useState } from 'react';
import Protected from './Protected';

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
      <div className="App">
        <React.Fragment>
          <header>
            <Navbar />
          </header>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="pastOutfits" element={
              <Protected isAuthenticated={userAuthenticated}>
                <HomePage />
              </Protected>
            } />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="disclaimer" element={<Disclaimers />} />
            <Route path="wardrobe" element={
              <Protected isAuthenticated={userAuthenticated}>
                <WardrobeSelection />
              </Protected>
            } />
            <Route path="settings" element={
              <Protected isAuthenticated={userAuthenticated}>
                <SettingsPage />
              </Protected>
            } />
            <Route path="ootd" element={
              <Protected isAuthenticated={userAuthenticated}>
                < OutfitOfTheDay />
              </Protected>
            } />

          </Routes>
        </React.Fragment>
      </div>

    </AuthContext.Provider>
  );
}

export default App;
