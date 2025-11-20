import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styling/WebsiteDevelopment.css";
import PreviousButton from "../../layout/NavigationButtons/NavigationbuttonComponents/PreviousBUtton.jsx";
import FooterHindi from "../../layout/Footer/FooterHindi.jsx";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";

export default function WebsiteDevelopmentHindi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavbarHindi />
      <div className="website-development-body">
        <section className="website-dev-container">
          <div className="swirling-bg">
            <div className="glass-card container" data-aos="zoom-in">
              <h1 className="section-heading">अनसूया माता वैबसाइड़</h1>
              <p className="section-paragraph">
                सती शिरोमणि माता अनसूया की वेबसाइट को तैयार करने के लिए अनसूया
                मन्दिर ट्रस्ट समिति की पूर्व कार्यकारिणियों द्वारा भी भरसक
                प्रयास किए जाते रहें हैं। लगातार चल रहे इन प्रयासों के फल स्वरूप
                यह वेबसाइट तैयार हो पायी है।
                <br />
                <br />
                इस वेबसाइट को तैयार करने हेतु वर्तमान कार्यकारिणी के सभी सदस्यों
                एवं मण्डल घाटी के प्रबुद्ध जनों का पूर्ण सहयोग प्राप्त हुआ।
                भविष्य में भी इसी प्रकार के सहयोग की अपेक्षा के साथ माता का
                आशीर्वाद सदा बना रहे।
              </p>
              <div className="signature-box" data-aos="fade-up">
                <p>
                  <strong>अध्यक्ष</strong>
                  <br />
                  अनसूया मन्दिर ट्रस्ट समिति
                  <br />
                  अनसूया आश्रम, मण्डल
                  <br />
                  मो० नं०- 8126373081
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Wrapper added to provide continuous background for PreviousButton */}
      <div className="nav-buttons-swirl-bg">
        <PreviousButton link="/DonationHindi" text="दान-पुण्य" />
      </div>
      <FooterHindi />
    </>
  );
}
