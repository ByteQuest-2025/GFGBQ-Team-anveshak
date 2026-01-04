import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const isLoggedIn = !!localStorage.getItem("token")

  const scrollToSection = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.success("Logged out successfully 👋")
    navigate("/signin")
  }
  const handleGetStarted = () => {
  const token = localStorage.getItem("token")
  if (!token) {
    navigate("/signin")
    toast.error("Please login to continue")
    
  } else {
    navigate("/assessment")
  }
}

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Earlysens
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              How It Works
            </button>

            {!isLoggedIn ? (
              <Link
                to="/signin"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Sign In
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-500 hover:text-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            )}

          <button
  onClick={handleGetStarted}
  className="px-5 py-2 rounded-xl text-sm font-medium bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.03] transition"
>
  Get Started
</button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-background/90 border-t border-border/50">
          <div className="px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              How It Works
            </button>

            {!isLoggedIn ? (
              <Link
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Sign In
              </Link>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false)
                  handleLogout()
                }}
                className="block text-left text-sm font-medium text-red-500 hover:text-red-600 transition"
              >
                Logout
              </button>
            )}

          <button
  onClick={() => {
    setIsOpen(false)
    handleGetStarted()
  }}
  className="block w-full text-center py-2 rounded-xl bg-primary text-primary-foreground font-medium shadow hover:shadow-lg transition"
>
  Get Started
</button>


          </div>
        </div>
      )}
    </nav>
  )
}
