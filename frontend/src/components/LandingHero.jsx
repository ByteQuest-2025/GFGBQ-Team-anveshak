export default function LandingHero({ onStart }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Early Detection of Silent Diseases</h1>
        <p>
          AI-powered risk analysis for life-threatening conditions like diabetes, hypertension,
          liver disorders, mental health & cardiac risk — before symptoms appear.
        </p>
        <button onClick={onStart}>Start Risk Analysis</button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1588776814546-84b3c19d8244?auto=format&fit=crop&w=600&q=60" alt="AI Health" />
      </div>
    </section>
  );
}
