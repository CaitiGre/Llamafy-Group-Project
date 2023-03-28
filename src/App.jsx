import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </React.Fragment>

    </div>
  );
}

export default App;
