import "./Footer.css";

export default function FooterEnglish() {
  return (
    <footer className="af-footer-container">
      <div className="af-content">
        {/* Temple Name/Title */}
        <h2 className="af-title">Shri Anasuya Mata Temple</h2>

        {/* Brief Description */}
        <p className="af-description">
          Located in the holy valleys of Chamoli, Uttarakhand, this Siddha Peeth
          is dedicated to Mata Anasuya. This place is a unique center of
          penance, sacrifice, and faith, where devotees experience immense
          peace.
        </p>

        {/* Copyright Section */}
        <div className="af-copyright">
          &copy; {new Date().getFullYear()} Anasuya Mandir Trust | Chamoli,
          Uttarakhand
        </div>
      </div>
    </footer>
  );
}
