from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

# -----------------------------
# 1. Load Model and Preprocessors
# -----------------------------
risk_model = joblib.load("risk_model.pkl")
scaler = joblib.load("scaler.pkl")
gender_encoder = joblib.load("gender_encoder.pkl")

# -----------------------------
# 2. Feature Columns
# -----------------------------
FEATURE_COLUMNS = [
    "age", "gender", "bmi",
    "avg_sleep_hours", "avg_daily_steps",
    "alcohol_units_per_week", "smoking_status", "stress_score",
    "systolic_bp", "diastolic_bp", "resting_heart_rate",
    "fasting_glucose", "hba1c",
    "cholesterol_total", "hdl", "ldl", "triglycerides",
    "alt", "ast",
    "phq9_score", "gad7_score",
    "family_diabetes", "family_hypertension",
    "family_heart_disease", "family_liver_disease"
]

TARGET_COLUMNS = [
    "diabetes_risk",
    "hypertension_risk",
    "cardiac_risk",
    "liver_disease_risk",
    "mental_health_risk"
]

# -----------------------------
# 3. Initialize Flask App
# -----------------------------
app = Flask(__name__)

# -----------------------------
# 4. Prediction API
# -----------------------------
@app.route("/predict-risk", methods=["POST"])
def predict_risk():
    try:
        data = request.json
        
        # Convert JSON to DataFrame
        patient_df = pd.DataFrame([data], columns=FEATURE_COLUMNS)

        # Encode gender
        patient_df["gender"] = gender_encoder.transform(patient_df["gender"])

        # Scale features
        X_scaled = scaler.transform(patient_df)

        # Predict risks
        risk_scores = risk_model.predict(X_scaled)[0]

        # Prepare response
        response = {disease: float(round(score, 4)) for disease, score in zip(TARGET_COLUMNS, risk_scores)}
        return jsonify({"status": "success", "risk_scores": response})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

# -----------------------------
# 5. Run Flask
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
