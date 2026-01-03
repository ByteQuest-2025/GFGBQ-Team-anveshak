import mongoose from "mongoose";

const familyHistorySchema = new mongoose.Schema({
     userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true
  },

  family_diabetes: {
    type: Number,
    enum: [0, 1],
    required: true
  },

  family_hypertension: {
    type: Number,
    enum: [0, 1],
    required: true
  },

  family_heart_disease: {
    type: Number,
    enum: [0, 1],
    required: true
  },

  family_liver_disease: {
    type: Number,
    enum: [0, 1],
    required: true
  }

});


const FamilyHistory = mongoose.models.FamilyHistory || mongoose.model("FamilyHistory", familyHistorySchema);

export default FamilyHistory;
