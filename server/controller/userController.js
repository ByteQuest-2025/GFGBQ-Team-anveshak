import jwt from 'jsonwebtoken'
import User from '../models/User.js';
import bcrypt from 'bcrypt'
import LifeStyle from '../models/LifeStyle.js';
import MedicalData from '../models/MedicalData.js';
import FamilyHistory from '../models/FamilyHistory.js';


const generateToken = (userId)=>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
  return token;
}


// Controller for user registration
// Post : /api/user/register
export const registerUser = async(req,res) =>{
try {
     const {name, email, password} = req.body;
    
     if( !name || !email || !password){
       return res.status(400).json({message: 'Missing required fields'})
     }


     const user = await User.findOne({email})
     if(user){
        return res.status(400).json({message: "User already exists"})
     }


     // create new user
     const hashedPassword = await bcrypt.hash(password,10)
     const newUser = await User.create({name, email, password: hashedPassword})

     // return success msg
     const token = generateToken(newUser._id);
     newUser.password = undefined;

     return res.status(201).json({message:"User Created successfully,", token, user:newUser});


} catch (error) {
  return res.status(400).json({message: error.message});
}
}


// Controller for user Login
// Post : /api/users/login
export const loginUser = async(req,res) =>{
try {
     const {email, password} = req.body;
    
     const user = await User.findOne({email})
     if(!user){
        return res.status(400).json({message: "Invalid email or password"});
     }

     // check password
     if(!user.comparePassword(password)){
      return res.status(400).json({message: "Invalid email or password"});
     }

     // return success msg
     const token = generateToken(user._id);
     
    
     user.password = undefined;

     return res.status(200).json({message:"Login successful,", token, user});

} catch (error) {
  return res.status(400).json({message: error.message});
}
}


export const saveAssessment = async (req, res) => {
  try {

     const userId =  req.userId ;
     const data = req.body;

        // ---------- Stage 1: User Info ----------
    const userInfo = {};
    if (data.age !== undefined) userInfo.age = data.age;
    if (data.gender) userInfo.gender = data.gender;

    if (Object.keys(userInfo).length > 0) {
      await User.findByIdAndUpdate(userId, {
        ...userInfo,
        profileCompletion: 25,
      });
    }


      // ---------- Stage 2: Lifestyle ----------
    const lifestyleFields = [
      "bmi",
      "avg_sleep_hours",
      "avg_daily_steps",
      "alcohol_units_per_week",
      "smoking_status",
      "stress_score",
      "phq9_score",
      "gad7_score",
    ];

    const lifestyleData = {};
    lifestyleFields.forEach((field) => {
      if (data[field] !== undefined) lifestyleData[field] = data[field];
    });

    if (Object.keys(lifestyleData).length > 0) {
      const lifestyle = await LifeStyle.findOne({ userId });
      if (lifestyle) {
        await LifeStyle.findOneAndUpdate({ userId }, lifestyleData, { new: true });
      } else {
        await LifeStyle.create({ userId, ...lifestyleData });
      }
      await User.findByIdAndUpdate(userId, { profileCompletion: 50 });
    }



     // ---------- Stage 3: Medical Data ----------
    const medicalFields = [
      "systolic_bp",
      "diastolic_bp",
      "resting_heart_rate",
      "fasting_glucose",
      "hba1c",
      "cholesterol_total",
      "hdl",
      "ldl",
      "triglycerides",
      "alt",
      "ast",
    ];

    const medicalData = {};
    medicalFields.forEach((field) => {
      if (data[field] !== undefined) medicalData[field] = data[field];
    });

    if (Object.keys(medicalData).length > 0) {
      const medical = await MedicalData.findOne({ userId });
      if (medical) {
        await MedicalData.findOneAndUpdate({ userId }, medicalData, { new: true });
      } else {
        await MedicalData.create({ userId, ...medicalData });
      }
      await User.findByIdAndUpdate(userId, { profileCompletion: 75 });
    }


     // ---------- Stage 4: Family History ----------
    const familyFields = [
      "family_diabetes",
      "family_hypertension",
      "family_heart_disease",
      "family_liver_disease",
    ];

    const familyData = {};
    familyFields.forEach((field) => {
      if (data[field] !== undefined) familyData[field] = data[field];
    });

    if (Object.keys(familyData).length > 0) {
      const family = await FamilyHistory.findOne({ userId });
      if (family) {
        await FamilyHistory.findOneAndUpdate({ userId }, familyData, { new: true });
      } else {
        await FamilyHistory.create({ userId, ...familyData });
      }
      await User.findByIdAndUpdate(userId, { profileCompletion: 100 });
    }

    return res.status(200).json({ message: "Assessment saved successfully" });
    
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }

}