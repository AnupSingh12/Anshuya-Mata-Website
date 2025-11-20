import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.card} style={{ "--anim-delay": "0.2s" }}>
        <h1 className={styles.heading} style={{ "--anim-delay": "0.4s" }}>
          Shri Ansuya Mata Mandir Trust Committee
        </h1>
        <h2 className={styles.subheading} style={{ "--anim-delay": "0.6s" }}>
          P.O. Chamoli District, Uttarakhand
        </h2>

        <div className={styles.regInfo} style={{ "--anim-delay": "0.8s" }}>
          <p>Registered under Society Registration Act</p>
          <p>Registration Certificate No: 71/61-62</p>
        </div>
      </section>

      <div className={styles.buttonGroup} style={{ "--anim-delay": "1.0s" }}>
        <Link to="/IntroductionPageEnglish">
          <button className={styles.langBtn}>English</button>
        </Link>
        <Link to="/IntroductionPageHindi">
          <button className={styles.langBtn}>हिन्दी</button>
        </Link>
      </div>
    </main>
  );
}
