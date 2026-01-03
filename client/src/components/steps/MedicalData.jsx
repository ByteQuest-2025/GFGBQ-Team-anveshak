export default function MedicalData({ data, onChange }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Medical Measurements
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Enter your most recent clinical and lab values
        </p>
      </div>

      {/* Vitals */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Vital Signs
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Systolic Blood Pressure (mmHg)"
            placeholder="135"
            value={data.systolic_bp}
            onChange={(v) => onChange("systolic_bp", v)}
          />

          <Field
            label="Diastolic Blood Pressure (mmHg)"
            placeholder="85"
            value={data.diastolic_bp}
            onChange={(v) => onChange("diastolic_bp", v)}
          />

          <Field
            label="Resting Heart Rate (bpm)"
            placeholder="78"
            value={data.resting_heart_rate}
            onChange={(v) => onChange("resting_heart_rate", v)}
          />
        </div>
      </section>

      {/* Lab Values */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Blood & Metabolic Markers
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Fasting Glucose (mg/dL)"
            placeholder="105"
            value={data.fasting_glucose}
            onChange={(v) => onChange("fasting_glucose", v)}
          />

          <Field
            label="HbA1c (%)"
            placeholder="6.0"
            value={data.hba1c}
            onChange={(v) => onChange("hba1c", v)}
          />
        </div>
      </section>
    </div>
  )
}

/* Reusable input field with compact spacing & modern UI */
function Field({ label, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-4 py-2.5 rounded-lg
          border border-gray-300 bg-white
          shadow-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          hover:border-indigo-400
          transition
        "
      />
    </div>
  )
}
