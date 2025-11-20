import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styling/WorshipAndRituals.css";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";

import WorsipImage from "../../assets/WorshipAndManagement/Worship.jpg";
import FooterHindi from "../../layout/Footer/FooterHindi.jsx";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";

export default function WorshipAndRitualsHindi() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="page-wrapper">
      <NavbarHindi />

      <div className="worship-rituals-body">
        {/* The divine-background now wraps both the main content and the navigation buttons to ensure continuity */}
        <div className="divine-background">
          <section className="worship-section">
            <div className="container py-5">
              <h1
                className="text-center worship-heading mb-5"
                data-aos="fade-down"
              >
                पूजा की व्यवस्था
              </h1>

              <div className="worship-card" data-aos="fade-up">
                <div className="worship-content">
                  <h3 className="section-title">
                    आश्रम में मन्दिर पूजा व्यवस्था
                  </h3>
                  <p>
                    अनसूया मन्दिर पूरे वर्ष भर दर्शनार्थियों के लिए खुला रहता
                    है। वर्ष भर सुबह शायं अनसूया माता के पुजारी सेमवाल पण्डितों
                    द्वारा पूजा सम्पन्न की जाती है । सेमवाल परिवार में सूतक पातक
                    (जन्म-मरण) होने की स्थिति में अनसूया आश्रम के तिवाडी
                    पण्डितों द्वारा पूजा सम्पन्न की जाती है। तिवाडी पण्डित
                    अनसूया मन्दिर के पुरोहित हैं। मन्दिर की पूजा व्यवस्था वर्षों
                    से इसी भांति चली आ रही है।
                  </p>
                </div>
                <div className="worship-image-wrapper">
                  <img
                    src={WorsipImage}
                    alt="Worship"
                    className="worship-image"
                  />
                </div>
              </div>

              <blockquote
                className="blockquote text-center mt-5"
                data-aos="fade-up"
              >
                <p className="mb-0">“माता अनसूया की कृपा सभी पर बनी रहे”</p>
                <br></br>
                <footer className="blockquote-footer">अनसूया भक्त </footer>
              </blockquote>
            </div>
          </section>

          {/* Navigation buttons are now part of the divine-background area */}
          <div className="navigation-buttons-area">
            <NavigationButtons
              prevLink="/TempleAdministrationHindi"
              prevText="अनसूया आश्रम का प्रबन्धन"
              nextLink="/FestivalsAndRitualsHindi"
              nextText="तीज त्यौहार"
            />
          </div>
        </div>

        <FooterHindi />
      </div>
    </div>
  );
}
