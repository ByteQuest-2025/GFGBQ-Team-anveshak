export default function RiskResult({ risk }) {
  if (!risk) return null;

  let label = "Low Risk";
  if (risk > 0.7) label = "High Risk";
  else if (risk > 0.4) label = "Moderate Risk";

  return (
    <div className="card">
      <h2>Risk Probability</h2>
      <h1>{(risk * 100).toFixed(1)}%</h1>
      <p>{label}</p>
    </div>
  );
}
