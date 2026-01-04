import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, Chrome, Github } from "lucide-react"
import { Link,useNavigate } from "react-router-dom"
import api from "../api/api"
import toast from "react-hot-toast"

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

  try {
    const res = await api.post("/api/user/login", {
      email,
      password,
    })
    
    localStorage.setItem("token", res.data.token)
      toast.success("Logged in successfully ✅")
      navigate("/dashboard")
        console.log(res.data.token);
      //window.location.href = "/dashboard"
    
      
     
  } catch (err) {
    setError(err.response?.data?.message || "Login failed")
  } finally {
    setIsLoading(false)
  }

  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-primary/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      {/* Card */}
      <div className="w-full max-w-md glass border border-border/50 rounded-[28px] px-8 py-10 sm:px-10 sm:py-12 shadow-xl">
        {/* Header */}
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 mb-8 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <span className="text-white font-bold text-lg">ES</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">
              Earlysens
            </span>
          </Link>

          <h1 className="text-3xl font-bold mb-3">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sign in to continue your proactive health journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {error && (
            <div className="rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Email */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full h-12 pl-11 pr-11 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-muted-foreground">
                Remember me
              </span>
            </label>
            <Link
              to="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

            {/* Signup */}
          <p className="text-center text-sm text-muted-foreground pt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign up
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
                shadow-lg shadow-cyan-500/25
                hover:shadow-xl hover:shadow-cyan-500/40
                hover:scale-[1.02]
                transition-all duration-300
                disabled:opacity-60 disabled:hover:scale-100
            "
            >
            {isLoading ? "Signing in..." : "Sign In"}
            </button>
        </form>
      </div>
    </div>
  )
}
