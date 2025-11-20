import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styling/WorshipAndRituals.css";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import FooterEnglish from "../../layout/Footer/FooterEnglish.jsx";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";

import WorsipImage from "../../assets/WorshipAndManagement/Worship.jpg";

export default function WorshipAndRitualsEnglish() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="page-wrapper">
      <NavbarEnglish />

      <div className="worship-rituals-body">
        {/* The divine-background now wraps both the main content and the navigation buttons to ensure continuity */}
        <div className="divine-background">
          <section className="worship-section">
            <div className="container py-5">
              <h1
                className="text-center worship-heading mb-5"
                data-aos="fade-down"
              >
                Provision for Ritual Offerings
              </h1>

              <div className="worship-card" data-aos="fade-up">
                <div className="worship-content">
                  <h3 className="section-title">
                    Temple Worship procedure in the Ashram
                  </h3>
                  <p>
                    The Ansuya Temple remains open to devotees throughout the
                    year. Daily worship is performed every morning and evening
                    by the Semwal priests. In cases of sūtak or pātak (ritual
                    impurity due to birth or death) within the Semwal family,
                    the worship is carried out by the Tiwari families of the
                    Ansuya Ashram. The Tiwari priests serve as the traditional
                    priests (purohits) of the Ansuya Temple. This system of
                    worship has been followed in the same manner for
                    generations.
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
                <p className="mb-0">
                  “May the blessings of Mata Ansuya be upon everyone.”
                </p>
                <br></br>
                <footer className="blockquote-footer">Ansuya Devotee</footer>
              </blockquote>
            </div>
          </section>

          {/* Navigation buttons are now part of the divine-background area */}
          <div className="navigation-buttons-area">
            <NavigationButtons
              prevLink="/TempleAdministrationEnglish"
              prevText="Temple Administration"
              nextLink="/FestivalsAndRitualsEnglish"
              nextText="Festivals And Rituals"
            />
          </div>
        </div>

        <FooterEnglish />
      </div>
    </div>
  );
}
