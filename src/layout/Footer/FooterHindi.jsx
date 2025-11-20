import "./Footer.css";

export default function FooterHindi() {
  return (
    <footer className="af-footer-container">
      <div className="af-content">
        {/* Temple Name/Title */}
        <h2 className="af-title">श्री अनसूया माता मंदिर</h2>

        {/* Brief Description */}
        <p className="af-description">
          चमोली, उत्तराखण्ड की पावन वादियों में स्थित यह सिद्ध पीठ माता अनसूया
          को समर्पित है। यह स्थान तप, त्याग और आस्था का अद्वितीय केंद्र है, जहाँ
          आकर भक्तों को असीम शांति की अनुभूति होती है।
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
