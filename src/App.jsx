import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SettingsPage from './components/SettingsPage';
import SettingsSubPage from './components/Profile';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="login" element={<LoginPage />} />

          <Route path="settings" element={<SettingsPage />} />

        </Routes>
      </React.Fragment>

    </div>
  );
}

export default App;
