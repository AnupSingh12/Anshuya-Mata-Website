import { Link } from "react-router-dom";
import styles from "../Styling/Home.module.css"; 

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.heading}>Shri Ansuya Mata Mandir Trust Committee</h1>
        <h2 className={styles.subheading}>P.O. Chamoli District, Uttarakhand</h2>
        <p>Registered under Society Registration Act</p>
        <p>Registration Certificate No: 71/61-62</p>
      </section>

      <div className={styles.buttonGroup}>
        <Link to="/pages/english_pages/introduction_e_pages">
          <button className={styles.langBtn}>English</button>
        </Link>
        <Link to="/pages/hindi_pages/introduction_page">
          <button className={styles.langBtn}>हिन्दी</button>
        </Link>
      </div>
    </main>
  );
}
