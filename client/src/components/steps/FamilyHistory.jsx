export default function FamilyHistory({ data, onChange }) {
  const options = [
    { label: "Diabetes", field: "family_diabetes" },
    { label: "Hypertension", field: "family_hypertension" },
    { label: "Heart Disease", field: "family_heart_disease" },
    { label: "Liver Disease", field: "family_liver_disease" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Family History
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Indicate if any of your immediate family members have had the following conditions.
        </p>
      </div>

      {/* Family History Questions */}
      <div className="space-y-4">
        {options.map(({ label, field }) => (
          <div key={field} className="flex flex-col md:flex-row items-center md:justify-between gap-4 p-4 border rounded-xl hover:shadow-sm transition">
            <span className="font-medium text-gray-800">{label}</span>
            
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => onChange(field, 1)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  data[field] === 1
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => onChange(field, 0)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  data[field] === 0
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
