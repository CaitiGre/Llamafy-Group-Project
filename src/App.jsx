
import React from 'react';
import './App.css';
import RegistrationPage from './components/Registration';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </React.Fragment>




    </div>
  );
}

export default App;
