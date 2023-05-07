import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import Favourites from "./components/Favourites/Favourites";
import RegistrationPage from "./components/RegistrationPage/Registration";
import LoginPage from "./components/LoginPage/LoginPage";
import WardrobeSelection from "./components/WardrobeSelection/WardrobeSelection";
import Navbar from "./components/Navbar/Navbar";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import OutfitOfTheDay from "./components/OutfitOfTheDay/OutfitOfTheDay";
import Disclaimers from "./components/Disclaimers/Disclaimer";
import AuthContext from "./AuthContext";
import { useState } from "react";
// import Protected from './Protected';
// import Prevented from './Prevented';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userAuthenticated, setUserAuthenticatedState] = useState(false);

  const setUserAuthenticated = async (value) => {
    return new Promise((resolve) => {
      setUserAuthenticatedState(value);
      resolve();
    });
  };

  return (
    <AuthContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
      <div className="App">
        <React.Fragment>
          <header>
            <Navbar />
          </header>

          <Routes>
            {!userAuthenticated && (
              <>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegistrationPage />} />
              </>
            )}
            {userAuthenticated && (
              <>
                <Route path="pastOutfits" element={<Favourites />} />
                <Route path="wardrobe" element={<WardrobeSelection />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="ootd" element={<OutfitOfTheDay />} />
              </>
            )}

            <Route path="disclaimer" element={<Disclaimers />} />
          </Routes>
        </React.Fragment>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AuthContext.Provider>
  );
}

export default App;
