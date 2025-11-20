import FooterHindi from "../../layout/Footer/FooterHindi.jsx";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";
import "../../Styling/Donation.css";

export default function Donation() {
  return (
    <>
      <NavbarHindi />
      <div>
        <section className="donation-new-wrapper">
          <div className="donation-new-hero">
            <h1 className="donation-new-heading">🙏 जय माता अनसूया</h1>
            <p className="donation-new-message">
              श्री अनसूया मंदिर को आर्थिक सहयोग देने के लिए हम आपके बहुत आभारी
              हैं। <br />
              आपका दान हमें पवित्र परंपराओं को संरक्षित करने, भक्तों की सेवा
              करने और हमारे मंदिर की शांति और मूलभावना को बनाए रखने में मदद करता
              है। <br />
              आपका हर योगदान एक आशीर्वाद है जो अनगिनत जीवन में दिव्य प्रकाश लाता
              है। हमारे साथ इस पवित्र मार्ग पर चलने के लिए धन्यवाद
            </p>
          </div>

          <div className="donation-new-bank">
            <h2 className="bank-title">मंदिर दान हेतु बैंक विवरण </h2>
            <div className="bank-card">
              <p>
                <strong>खाता नाम :</strong> श्री अनसूया मंदिर ट्रस्ट समिति
              </p>
              <p>
                <strong>ब्रांच का नाम :</strong> उत्तराखंड ग्रामीण बैंक , शाखा
                मंडल
              </p>
              <p>
                <strong>खाता संख्या :</strong> 4253029920
              </p>
              <p>
                <strong>आईएफएससी कोड:</strong> SBIN0RRUTGB
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Wrapper added to provide continuous background for navigation buttons */}
      <div className="nav-buttons-donation">
        <NavigationButtons
          prevLink="/AnnualFairHindi"
          prevText="वार्षिक मेला"
          nextLink="/WebsiteDevelopMentHindi"
          nextText="वेबसाइट विकास"
        />
      </div>
      <FooterHindi />
    </>
  );
}
