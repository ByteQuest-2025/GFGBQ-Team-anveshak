export default function TrendChart({ risk }) {
  return (
    <div className="card">
      <h2>Doctor View: Risk Trend</h2>
      <p>Trend chart placeholder for doctor view (can be enhanced with chart libraries)</p>
      <p>Current risk: {(risk * 100).toFixed(1)}%</p>
    </div>
  );
}
