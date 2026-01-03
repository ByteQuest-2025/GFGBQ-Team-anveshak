import { useState } from "react"
import { ChevronLeft, ChevronRight, Activity } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function PatientDataForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const [data, setData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    glucose: "",
    cholesterol: "",
    sleep: "",
    exercise: "",
    stress: "",
    familyHistory: "",
  })

  const update = (key, value) =>
    setData((prev) => ({ ...prev, [key]: value }))

  const progress = (step / 5) * 100

  const submit = () => {
    sessionStorage.setItem("assessment", JSON.stringify(data))
    navigate("/dashboard")
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-8 md:p-10">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {step} of 5</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-8 min-h-[260px]">
        {step === 1 && (
          <Section title="Basic Information" subtitle="Tell us about yourself">
            <Field label="Age">
              <input type="number" onChange={(e) => update("age", e.target.value)} />
            </Field>
            <Field label="Gender">
              <select onChange={(e) => update("gender", e.target.value)}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>
          </Section>
        )}

        {step === 2 && (
          <Section title="Body Metrics" subtitle="Helps calculate health ratios">
            <Field label="Weight (kg)">
              <input type="number" onChange={(e) => update("weight", e.target.value)} />
            </Field>
            <Field label="Height (cm)">
              <input type="number" onChange={(e) => update("height", e.target.value)} />
            </Field>
          </Section>
        )}

        {step === 3 && (
          <Section title="Lab Values" subtitle="Optional but recommended">
            <Field label="Fasting Glucose">
              <input type="number" onChange={(e) => update("glucose", e.target.value)} />
            </Field>
            <Field label="Cholesterol">
              <input type="number" onChange={(e) => update("cholesterol", e.target.value)} />
            </Field>
          </Section>
        )}

        {step === 4 && (
          <Section title="Lifestyle" subtitle="Your daily habits matter">
            <Field label="Sleep (hrs/night)">
              <input type="number" onChange={(e) => update("sleep", e.target.value)} />
            </Field>
            <Field label="Exercise per week">
              <select onChange={(e) => update("exercise", e.target.value)}>
                <option value="">Select</option>
                <option>None</option>
                <option>1–2 times</option>
                <option>3–4 times</option>
                <option>5+ times</option>
              </select>
            </Field>
          </Section>
        )}

        {step === 5 && (
          <Section title="Family History" subtitle="Genetic risk factors">
            <Field label="Known Conditions">
              <textarea
                rows="4"
                placeholder="Diabetes, heart disease, etc."
                onChange={(e) => update("familyHistory", e.target.value)}
              />
            </Field>
          </Section>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-50"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        ) : <div />}

        {step < 5 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
          >
            Next
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={submit}
            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
          >
            Submit
            <Activity size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

/* ---------- Small UI Helpers ---------- */

function Section({ title, subtitle, children }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p className="text-gray-500 mb-6">{subtitle}</p>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      {children.props.type === "number" || children.type === "select" ? (
        <div className="relative">
          {children}
        </div>
      ) : children}
      {children.type !== "textarea" && (
        <style jsx="true">{`
          input, select, textarea {
            width: 100%;
            padding: 12px 14px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            outline: none;
          }
          input:focus, select:focus, textarea:focus {
            border-color: #2563eb;
          }
        `}</style>
      )}
    </div>
  )
}
