import mongoose from "mongoose";

const medicalDataSchema = new mongoose.Schema({

    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },

  // Vitals
  systolic_bp: {
    type: Number,
    min: 70,
    max: 250,
    required: true
  },

  diastolic_bp: {
    type: Number,
    min: 40,
    max: 150,
    required: true
  },

  resting_heart_rate: {
    type: Number,
    min: 30,
    max: 200,
    required: true
  },

  // Glycemic markers
  fasting_glucose: {
    type: Number,
    min: 50,
    max: 400,
    required: true
  },

  hba1c: {
    type: Number,
    min: 3,
    max: 20,
    required: true
  },

  // Lipid profile
  cholesterol_total: {
    type: Number,
    min: 50,
    max: 500,
    required: true
  },

  hdl: {
    type: Number,
    min: 10,
    max: 150,
    required: true
  },

  ldl: {
    type: Number,
    min: 10,
    max: 300,
    required: true
  },

  triglycerides: {
    type: Number,
    min: 20,
    max: 1000,
    required: true
  },

  // Liver enzymes
  alt: {
    type: Number,
    min: 5,
    max: 300,
    required: true
  },

  ast: {
    type: Number,
    min: 5,
    max: 300,
    required: true
  },
  
}, {timestamps: true})


const MedicalData = mongoose.models.MedicalData || mongoose.model("MedicalData", medicalDataSchema);

export default MedicalData;