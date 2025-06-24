import { Link } from "react-router-dom";
import "../Styling/Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="intro-card">
        <h1 className="intro-heading">Shri Ansuya Mata Mandir Trust Committee</h1>
        <h2 className="intro-subheading">P.O. Chamoli District, Uttarakhand</h2>
        <p>Registered under Society Registration Act</p>
        <p>Registration Certificate No: 71/61-62</p>
      </section>

      <div className="btn-group">
        <Link to="/pages/english_pages/introduction_e_pages">
          <button className="lang-btn">English</button>
        </Link>
        <Link to="/pages/hindi_pages/introduction_page">
          <button className="lang-btn">हिन्दी</button>
        </Link>
      </div>
    </main>
  );
}
