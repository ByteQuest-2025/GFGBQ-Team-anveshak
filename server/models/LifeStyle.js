import mongoose from "mongoose";

const lifeStyleSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  // Body composition
  bmi: {
    type: Number,
    min: 10,
    max: 60,
    required: true
  },

  // Sleep
  avg_sleep_hours: {
    type: Number,
    min: 0,
    max: 12,
    required: true
  },

  // Activity
  avg_daily_steps: {
    type: Number,
    min: 0,
    max: 50000,
    required: true
  },

  // Substance use
  alcohol_units_per_week: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },

  smoking_status: {
    type: Number,
    enum: [0, 1], // 0 = No, 1 = Yes
    required: true
  },

  // Stress & mental wellbeing
  stress_score: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },

  phq9_score: {
    type: Number,
    min: 0,
    max: 27,
    required: true
  },

  gad7_score: {
    type: Number,
    min: 0,
    max: 21,
    required: true
  },


}, {timestamps: true})


const LifeStyle = mongoose.models.LifeStyle || mongoose.model('LifeStyle', lifeStyleSchema);

export default LifeStyle;