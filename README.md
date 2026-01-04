# GFGBQ-Team-anveshak
Repository for anveshak - Vibe Coding Hackathon

# Problem Statement
**PS-05: "Silent Disease" Early Detection Engine**  
Detect What Patients Don’t Even Know They Have

A large percentage of life-threatening diseases (diabetes, hypertension, liver disorders, mental health conditions, early cardiac risk) remain undiagnosed for years because symptoms are mild, ignored, or fragmented across reports. Healthcare systems rely heavily on reactive diagnosis rather than predictive prevention.

**Challenge:** Build an AI-driven early risk detection system that:  
- Aggregates non-obvious health signals:  
  - Lab trends over time  
  - Lifestyle data (sleep, activity, nutrition)  
  - Stress & mental health indicators  
  - Family history patterns  
- Detects silent or early-stage diseases before clinical diagnosis  
- Generates **risk probability scores** (not binary outcomes)  
- Provides preventive action recommendations for patients and doctors

# Project Name
Silent Disease – Early Detection Engine (EarlyDetect)

# Team Name
Anveshak

# Deployed Link (Optional)
 -

# 2-Minute Demonstration Video
-https://drive.google.com/file/d/18labeMROg3x9TfmyVvyMQlwhSDyYBohc/view?usp=sharing

# PPT Link
-https://drive.google.com/file/d/1pgEWsPIqLNYPRoPJ93ozuPaFBNbRL4Mg/view?usp=sharing 

---

# Project Overview
This project is an AI-powered platform that predicts early risks for silent diseases. Patients can input their lab results, lifestyle, stress levels, and family history to get a **personalized risk report**. Doctors can use it to **monitor patients proactively**.

---

# Features
- Multi-step patient input form for demographics, labs, lifestyle, stress, and family history  
- Dashboard showing **risk probability scores** for multiple diseases  
- Charts for lab trends over time  
- Preventive recommendations for patients and doctors  
- Downloadable reports  

---

# 🤖 Machine Learning Model Overview

The system uses a trained **machine learning classification model** to predict a user's health risk based on multiple factors.

# 🔍 Inputs
- Age and gender
- Medical history
- Lifestyle habits
- Family medical history

# 🧠 Model
- Trained using historical health data
- Features are preprocessed using scaling and encoding
- The model outputs a **risk score** and **risk category** (Low / Medium / High)

# ⚙️ Integration
- The backend sends user data to the ML model API
- The model processes the input and returns predictions
- Results are displayed in the frontend dashboard

> The ML model is pre-trained and stored using serialized files for fast inference.

📁 Project Structure

GFGBQ-Team-anveshak/
│
├── client/        # React (Vite) frontend
├── server/        # Node.js + Express backend
├── model/         # ML model & prediction logic
└── README.md

---

# Setup and Installation

🛠️ Setup and Installation
1️⃣ Clone the Repository
git clone https://github.com/ByteQuest-2025/GFGBQ-Team-anveshak.git
cd GFGBQ-Team-anveshak

💻 Frontend Setup (Client)
cd client
npm install
npm run dev


📍 Frontend will run at:
http://localhost:5173/

🖥️ Backend Setup (Server)
cd ../server
npm install

Create .env file in server/
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017


Database name (earlysense) is appended automatically in the code.

Start the backend server
npm start


📍 Backend runs at:
http://localhost:3000/

🤖 ML Model Setup (Optional)
cd ../model
pip install -r requirements.txt


Run the model:

python app.py

🚀 Usage Instructions

Open the frontend in your browser
👉 http://localhost:5173/

Sign up or log in as a user

Fill in the multi-step patient assessment form

User Information

Medical History

Lifestyle Details

Family History

Submit the form to generate a health risk analysis

View your personalized risk dashboard

Download or review your risk assessment report