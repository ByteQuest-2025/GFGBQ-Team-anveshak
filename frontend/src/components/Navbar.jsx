import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">WeCare AI</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`line ${isOpen ? "fade" : ""}`}></div>
        <div className={`line ${isOpen ? "rotate2" : ""}`}></div>
      </div>
    </nav>
  );
}
