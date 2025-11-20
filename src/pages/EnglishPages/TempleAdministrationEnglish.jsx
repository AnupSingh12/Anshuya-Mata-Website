import "../../Styling/TempleAdministration.css";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import FooterEnglish from "../../layout/Footer/FooterEnglish.jsx";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";

export default function TempleAdministration() {
  return (
    <div className="temple-adminstration-body">
      <NavbarEnglish />
      <div>
        <section className="temple-admin-hero">
          <div className="overlay">
            <div className="admin-text-wrapper">
              <h1 className="admin-hero-heading">
                Ansuya Temple Administration
              </h1>
              <p className="admin-hero-paragraph">
                The Ansuya Mandir Trust Committee (A.M.T.) manages the Ansuya
                Ashram and consists of one representative from each of the nine
                villages in the Mandal Valley. The committee serves a five-year
                term. The President is elected by the general body ("News
                Naali") and appoints the Secretary and Treasurer from among the
                members. Roles are defined by the committee's rules. Four
                general meetings are held annually to discuss and manage temple
                affairs.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="nav-buttons-background">
        <div className="overlay-nav"></div>
        <NavigationButtons
          prevLink="/NearBySitesEnglish"
          prevText="Nearby Sites"
          nextLink="/WorshipAndRitualsEnglish"
          nextText="Worship & Rituals"
        />
      </div>
      <FooterEnglish />
    </div>
  );
}
