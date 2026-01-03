export default function RoleToggle({ role, setRole }) {
  return (
    <div className="card">
      <label><strong>View Mode:</strong></label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="patient">Patient View</option>
        <option value="doctor">Doctor View</option>
      </select>
    </div>
  );
}
