export default function LifeStyle({ data, onChange }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">
          Lifestyle Information
        </h2>
        <p className="text-sm text-gray-500">
          Your daily habits help us understand long-term health risks
        </p>
      </div>

      {/* Form */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* BMI */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Body Mass Index (BMI)
          </label>
          <input
            type="number"
            placeholder="e.g. 27.5"
            value={data.bmi}
            onChange={(e) => onChange("bmi", e.target.value)}
            className="
              w-full px-4 py-3 rounded-xl
              border border-gray-300 bg-white
              shadow-sm placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition
            "
          />
        </div>

        {/* Sleep */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Average Sleep (hours/night)
          </label>
          <input
            type="number"
            placeholder="e.g. 6.5"
            value={data.avg_sleep_hours}
            onChange={(e) => onChange("avg_sleep_hours", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Steps */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Average Daily Steps
          </label>
          <input
            type="number"
            placeholder="e.g. 4000"
            value={data.avg_daily_steps}
            onChange={(e) => onChange("avg_daily_steps", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Alcohol */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Alcohol Units / Week
          </label>
          <input
            type="number"
            placeholder="e.g. 3"
            value={data.alcohol_units_per_week}
            onChange={(e) => onChange("alcohol_units_per_week", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Smoking */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Smoking Status
          </label>
          <select
            value={data.smoking_status}
            onChange={(e) => onChange("smoking_status", Number(e.target.value))}
            className="
              w-full px-4 py-3 rounded-xl
              border border-gray-300 bg-white
              shadow-sm focus:ring-2 focus:ring-indigo-500
              transition
            "
          >
            <option value={0}>Non-Smoker</option>
            <option value={1}>Smoker</option>
          </select>
        </div>

        {/* Stress */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Stress Level (0–10)
          </label>
          <input
            type="number"
            placeholder="e.g. 7"
            value={data.stress_score}
            onChange={(e) => onChange("stress_score", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </div>
    </div>
  )
}
