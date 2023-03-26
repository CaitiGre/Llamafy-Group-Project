import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage';

function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </React.Fragment>




    </div>
  );
}

export default App;