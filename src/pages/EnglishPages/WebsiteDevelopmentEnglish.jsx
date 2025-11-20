import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styling/WebsiteDevelopment.css";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import FooterEnglish from "../../layout/Footer/FooterEnglish";
import PreviousButton from "../../layout/NavigationButtons/NavigationbuttonComponents/PreviousBUtton.jsx";

export default function WebsiteDevelopment() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavbarEnglish />
      <div className="website-development-body">
        <section className="website-dev-container">
          <div className="swirling-bg">
            <div className="glass-card container" data-aos="zoom-in">
              <h1 className="section-heading">Website Development</h1>
              <p className="section-paragraph">
                Sincere efforts have also been made by the previous executive
                committees of the Ansuya Mandir Trust Committee to develop the
                website dedicated to Sati Shiromani Mata Ansuya. As a result of
                these continuous efforts, this website has finally been brought
                into existence.
                <br />
                <br />
                The creation of this website has been made possible with the
                full support of all the current executive members and the
                esteemed residents of the Mandal Valley. We hope for the same
                kind of support in the future as well, and may the blessings of
                Mata always remain with us.
              </p>
              <div className="signature-box" data-aos="fade-up">
                <p>
                  <strong>Sd/-</strong>
                  <br />
                  Chairperson
                  <br />
                  Shri Ansuya Mandir Trust Committee
                  <br />
                  Ansuya Dham, Chamoli
                  <br />
                  Mob. No. – 8126373081
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Wrapper added to provide continuous background for PreviousButton */}
      <div className="nav-buttons-swirl-bg">
        <PreviousButton link="/DonationEnglish" text="Donation" />
      </div>
      <FooterEnglish />
    </>
  );
}
