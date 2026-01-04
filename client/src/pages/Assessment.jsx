import { useState } from "react"
import UserInfo from "../components/steps/UserInfo"
import LifeStyle from "../components/steps/LifeStyle"
import MedicalData from "../components/steps/MedicalData"
import FamilyHistory from "../components/steps/FamilyHistory"
import ProgressBar from "../components/ProgressBar"
import api from "../api/api"
import toast from "react-hot-toast"

const steps = ["User Info", "Lifestyle", "Medical Data", "Family History"]

export default function Assessment() {
  const [activeStep, setActiveStep] = useState(0)

  const [formData, setFormData] = useState({
    age: "",
    gender: "",

    bmi: "",
    avg_sleep_hours: "",
    avg_daily_steps: "",
    alcohol_units_per_week: "",
    smoking_status: 0,
    stress_score: "",
    phq9_score: "",
    gad7_score: "",

    systolic_bp: "",
    diastolic_bp: "",
    resting_heart_rate: "",
    fasting_glucose: "",
    hba1c: "",
    cholesterol_total: "",
    hdl: "",
    ldl: "",
    triglycerides: "",
    alt: "",
    ast: "",

    family_diabetes: 0,
    family_hypertension: 0,
    family_heart_disease: 0,
    family_liver_disease: 0
  })

  const updateField = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <UserInfo data={formData} onChange={updateField} />
      case 1:
        return <LifeStyle data={formData} onChange={updateField} />
      case 2:
        return <MedicalData data={formData} onChange={updateField} />
      case 3:
        return <FamilyHistory data={formData} onChange={updateField} />
      default:
        return null
    }
  }


const handleNext = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login again");
      return;
    }

    // 1️⃣ Save assessment step to YOUR backend
    await api.post(
      "/api/user/assessment",
      formData,
      {
        headers: {
          Authorization: `${token}`, // ✅ FIXED
        },
      }
    );

    // 2️⃣ IF LAST STEP → CALL ML MODEL
    if (activeStep === steps.length - 1) {

      const mlResponse = await api.post(
        "https://silent-disease-detection.onrender.com/predict-risk",
        {
          age: Number(formData.age),
          gender: formData.gender,
          bmi: Number(formData.bmi),
          avg_sleep_hours: Number(formData.avg_sleep_hours),
          avg_daily_steps: Number(formData.avg_daily_steps),
          alcohol_units_per_week: Number(formData.alcohol_units_per_week),
          smoking_status: Number(formData.smoking_status),
          stress_score: Number(formData.stress_score),

          systolic_bp: Number(formData.systolic_bp),
          diastolic_bp: Number(formData.diastolic_bp),
          resting_heart_rate: Number(formData.resting_heart_rate),
          fasting_glucose: Number(formData.fasting_glucose),
          hba1c: Number(formData.hba1c),

          cholesterol_total: Number(formData.cholesterol_total),
          hdl: Number(formData.hdl),
          ldl: Number(formData.ldl),
          triglycerides: Number(formData.triglycerides),
          alt: Number(formData.alt),
          ast: Number(formData.ast),

          phq9_score: Number(formData.phq9_score),
          gad7_score: Number(formData.gad7_score),

          family_diabetes: Number(formData.family_diabetes),
          family_hypertension: Number(formData.family_hypertension),
          family_heart_disease: Number(formData.family_heart_disease),
          family_liver_disease: Number(formData.family_liver_disease),
        }
      );

      // 3️⃣ STORE RESULTS FOR DASHBOARD
      sessionStorage.setItem(
        "assessmentData",
        JSON.stringify(formData)
      );

      sessionStorage.setItem(
        "riskPrediction",
        JSON.stringify(mlResponse.data)
      );

      toast.success("Assessment completed successfully!");

      // navigate("/dashboard");
      return;
    }

    // 4️⃣ NORMAL STEP CONTINUE
    toast.success("Saved successfully");
    setActiveStep(prev => prev + 1);

  } catch (error) {
    console.error(error.response?.data || error.message);
    toast.error(
      error.response?.data?.message || "Error saving assessment"
    );
  }
};


  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1)
    }
  }

  return (
  <div className="min-h-screen pt-16 bg-gradient-to-br from-sky-50 to-indigo-100">

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Health Risk Assessment
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Complete all steps to receive a personalized and confidential health risk analysis.
          </p>
        </div>

        {/* Progress */}
        <ProgressBar steps={steps} activeStep={activeStep} />

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 transition-all">
          {renderStep()}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-10">
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition
                ${activeStep === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              ← Back
            </button>

            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold
                         hover:bg-indigo-700 transition shadow-md"
            >
              {activeStep === steps.length - 1
                ? "Finish Assessment"
                : "Save & Continue →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
