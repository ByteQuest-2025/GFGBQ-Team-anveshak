export default function UserInfo({ data, onChange }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">
          User Information
        </h2>
        <p className="text-sm text-gray-500">
          Tell us a little about yourself
        </p>
      </div>

      {/* Form */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Age */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Age
          </label>
          <input
            type="number"
            placeholder="e.g. 45"
            value={data.age}
            onChange={(e) => onChange("age", e.target.value)}
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-300
              bg-white
              text-gray-900
              placeholder-gray-400
              shadow-sm
              focus:outline-none
              focus:ring-2 focus:ring-indigo-500
              focus:border-indigo-500
              transition
            "
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Gender
          </label>
          <select
            value={data.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-300
              bg-white
              text-gray-900
              shadow-sm
              focus:outline-none
              focus:ring-2 focus:ring-indigo-500
              focus:border-indigo-500
              transition
            "
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  )
}
