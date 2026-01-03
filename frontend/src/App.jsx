import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingHero from "./components/LandingHero";
import Features from "./components/Features";
import RoleToggle from "./components/RoleToggle";
import PatientForm from "./components/PatientForm";
import RiskResult from "./components/RiskResult";
import TrendChart from "./components/TrendChart";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

function App() {
  const [started, setStarted] = useState(false);
  const [role, setRole] = useState("patient");
  const [risk, setRisk] = useState(null);

  const handleAnalyze = (data) => {
    const mockRisk = Math.random() * (0.9 - 0.2) + 0.2;
    setRisk(mockRisk);
  };

  return (
    <div>
      <Navbar started={started} setStarted={setStarted} />

      {!started ? (
        <>
          <LandingHero onStart={() => setStarted(true)} />
          <Features />
        </>
      ) : (
        <div className="container">
          <h1>Silent Disease Early Detection Engine</h1>
          <RoleToggle role={role} setRole={setRole} />
          <PatientForm onAnalyze={handleAnalyze} />
          <RiskResult risk={risk} />
          {role === "doctor" && risk && <TrendChart risk={risk} />}
          <Disclaimer />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
