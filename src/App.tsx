import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from 'react';
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import ProjectPageLayout from "@layouts/ProjectPageLayout";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;