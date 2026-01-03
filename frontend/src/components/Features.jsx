import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faUserDoctor, faBrain } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  const featureList = [
    {
      icon: faHeartbeat,
      title: "Early Risk Detection",
      description: "Aggregates lifestyle & lab trends to identify hidden health risks."
    },
    {
      icon: faUserDoctor,
      title: "Patient & Doctor Support",
      description: "Provides probability-based insights and preventive guidance."
    },
    {
      icon: faBrain,
      title: "AI-driven Analysis",
      description: "Intelligent assessment without replacing professional diagnosis."
    }
  ];

  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="feature-cards">
        {featureList.map((f, i) => (
          <div className="feature-card" key={i}>
            <FontAwesomeIcon icon={f.icon} size="3x" style={{ color: "#2e86de" }} />
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
