import { useState ,useEffect} from "react";
import { User, AlertTriangle, HeartPulse } from "lucide-react";

import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const token = localStorage.getItem("token")
  const [assessment, setAssessment] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) return;

    const assessmentData = sessionStorage.getItem("assessmentData");
    const predictionData = sessionStorage.getItem("riskPrediction");

    if (assessmentData && predictionData) {
      setAssessment({
        ...JSON.parse(assessmentData),
        prediction: JSON.parse(predictionData),
      });
    }
  }, [token]);

  if (!token) return null;
  const getPercent = (value) => {
  if (value === undefined || value === null) return "—";
  return `${(value * 100).toFixed(1)}%`;
};

const getRiskColor = (value) => {
  if (value < 0.33) return "bg-green-100 text-green-700";
  if (value < 0.66) return "bg-yellow-100 text-yellow-700";
  return "bg-red-100 text-red-700";
};

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-sky-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

        {/* Header */}
        <h1 className="text-3xl font-bold">Health Dashboard</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
            <User />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Sample</h2>
            {assessment ? (
              <p className="text-gray-500">
                Age: {assessment.age || "—"} | Gender: {assessment.gender || "—"}
              </p>
            ) : (
              <p className="text-gray-500">
                Complete assessment to see health insights
              </p>
            )}
          </div>
        </div>

        {/* ⛔ No assessment */}
        {!assessment && (
          <div className="bg-white rounded-2xl shadow p-8 text-center space-y-4">
            <h3 className="text-lg font-semibold">Assessment not completed</h3>
            <p className="text-gray-600">
              Please complete your assessment to view insights.
            </p>
            <button
              onClick={() => navigate("/assessment")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
            >
              Fill Assessment
            </button>
          </div>
        )}

        {/* ✅ AI Prediction (INSIDE component) */}
       {assessment?.prediction?.risk_scores && (
  <div className="bg-white rounded-2xl shadow p-6">
    <h3 className="text-lg font-semibold mb-6">AI Risk Prediction</h3>

    <div className="grid md:grid-cols-3 gap-6">

      <RiskCard
        title="Diabetes Risk"
        level={getPercent(assessment.prediction.risk_scores.diabetes_risk)}
        color={getRiskColor(assessment.prediction.risk_scores.diabetes_risk)}
        icon={<AlertTriangle />}
        description="Based on glucose, BMI, lifestyle"
      />

      <RiskCard
        title="Hypertension Risk"
        level={getPercent(assessment.prediction.risk_scores.hypertension_risk)}
        color={getRiskColor(assessment.prediction.risk_scores.hypertension_risk)}
        icon={<HeartPulse />}
        description="Based on blood pressure & stress"
      />

      <RiskCard
        title="Cardiac Risk"
        level={getPercent(assessment.prediction.risk_scores.cardiac_risk)}
        color={getRiskColor(assessment.prediction.risk_scores.cardiac_risk)}
        icon={<HeartPulse />}
        description="Heart disease probability"
      />

      <RiskCard
        title="Liver Disease Risk"
        level={getPercent(assessment.prediction.risk_scores.liver_disease_risk)}
        color={getRiskColor(assessment.prediction.risk_scores.liver_disease_risk)}
        icon={<AlertTriangle />}
        description="Based on ALT, AST, alcohol"
      />

      <RiskCard
        title="Mental Health Risk"
        level={getPercent(assessment.prediction.risk_scores.mental_health_risk)}
        color={getRiskColor(assessment.prediction.risk_scores.mental_health_risk)}
        icon={<User />}
        description="Based on PHQ-9 & GAD-7"
      />

    </div>
  </div>
)}


      
        {/* {assessment && (
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Submitted Data</h3>
            <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {JSON.stringify(assessment, null, 2)}
            </pre>
          </div>
        )} */}

      </div>
    </div>
  )
  function RiskCard({ title, level, color, icon, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${color}`}>
        {icon}
        {level}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

}
