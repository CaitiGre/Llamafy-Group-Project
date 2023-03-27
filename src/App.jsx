import "./App.css";
import { Routes, Route } from "react-router-dom";
import WardrobeSelection from "./components/WardrobeSelection/WardrobeSelection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/wardrobeSelection" element={<WardrobeSelection />} />
      </Routes>
    </div>
  );
}

export default App;
