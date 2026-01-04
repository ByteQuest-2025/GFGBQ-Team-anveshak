import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User, Chrome, Github } from "lucide-react"
import { Link ,useNavigate} from "react-router-dom"
import api from "../api/api";
import toast from "react-hot-toast";




export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "patient",
  })

  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    
  try {
    setIsLoading(true)

    const res = await api.post("/api/user/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })

    

    localStorage.setItem("token", res.data.token)
    toast.success("User registered successfully 🎉")
    navigate("/dashboard")


  } catch (err) {
    setError(err.response?.data?.message || "Signup failed")
  } finally {
    setIsLoading(false)
  }

  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="flex justify-center items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
              ES
            </div>
            <span className="text-xl font-semibold">Earlysens</span>
          </Link>

          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-500 text-sm">
            Start detecting health risks early
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="text-sm bg-red-50 text-red-600 p-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          {/* User Type */}
         

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="name"
              placeholder="Full name"
              required
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-10 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              required
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-10 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

           <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 font-medium hover:underline">
              Sign in
            </Link>
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full h-12 rounded-xl
              bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500
              text-white font-semibold
              shadow-lg shadow-cyan-500/30
              hover:shadow-xl hover:scale-[1.02]
              transition-all duration-300
              disabled:opacity-60
            "
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>

        
         
        </form>
      </div>
    </div>
  )
}
