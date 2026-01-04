import {
  Activity,
  Heart,
  Brain,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-36 pb-28 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-1/4 w-[420px] h-[420px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-24 right-1/4 w-[360px] h-[360px] bg-cyan-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            <Activity className="w-4 h-4" />
            AI-Powered Preventive Healthcare
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Detect Diseases
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-cyan-500 bg-clip-text text-transparent">
              Before Symptoms Appear
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
            Earlysens uses advanced AI to analyze hidden health signals and
            identify silent diseases early—when prevention still matters.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/assessment"
              className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Start Free Risk Check
            </Link>
{/*  */}
              <button
              onClick={() => scrollToSection("how-it-works")}
              className="px-10 py-4 rounded-2xl border border-border hover:bg-muted transition"
            >
              How It Works
            </button>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
            {[
              ["92%", "Detection Accuracy"],
              ["5+", "Silent Conditions"],
              ["10K+", "People Helped"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition"
              >
                <div className="text-4xl font-bold text-primary mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Conditions We Detect Early
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Many serious diseases show warning signs long before symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              [Activity, "Type 2 Diabetes", "Glucose trends & metabolic signals"],
              [Heart, "Hypertension", "Blood pressure & lifestyle patterns"],
              [Brain, "Mental Health Risk", "Stress & sleep indicators"],
              [Shield, "Liver Disorders", "Early liver risk markers"],
              [TrendingUp, "Cardiac Risk", "Heart disease probability"],
              [Users, "Family History", "Genetic & inherited risks"],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="group glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-24 px-4 bg-muted/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How Earlysens Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and clinically meaningful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              ["1", "Health Data Input", "Labs, lifestyle, history"],
              ["2", "AI Risk Modeling", "Pattern & probability analysis"],
              ["3", "Preventive Action", "Personalized next steps"],
            ].map(([num, title, desc]) => (
              <div key={num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center">
                  {num}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-4 relative text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-1/2 h-96 bg-primary/25 blur-3xl" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Prevention Starts Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Take control of your health before symptoms take control of you.
        </p>

        <Link
          to="/assessment"
          className="inline-flex items-center justify-center px-12 py-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg shadow-xl hover:scale-105 transition"
        >
          Get My Health Risk
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-lg">Earlysens</span>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <span className="text-sm text-muted-foreground">
            © 2026 Earlysens
          </span>
        </div>
      </footer>
    </div>
  )
}
