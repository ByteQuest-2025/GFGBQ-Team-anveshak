import { useState } from "react";

export default function PatientForm({ onAnalyze }) {
  const [form, setForm] = useState({
    age: "",
    glucose: "",
    bp: "",
    bmi: "",
    stress: "",
    activity: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="card" onSubmit={(e) => {
      e.preventDefault();
      onAnalyze(form);
    }}>
      <h2>Health Data Input</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key.toUpperCase()}
          value={form[key]}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "80%" }}
        />
      ))}

      <button type="submit">Analyze Risk</button>
    </form>
  );
}
