export default function ProgressBar({ steps, activeStep }) {
  const progress = ((activeStep + 1) / steps.length) * 100

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm font-medium text-gray-600">
        {steps.map((step, index) => (
          <span
            key={step}
            className={index <= activeStep ? "text-indigo-600" : ""}
          >
            {step}
          </span>
        ))}
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
