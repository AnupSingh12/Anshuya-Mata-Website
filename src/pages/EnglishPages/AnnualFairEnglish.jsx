import "../../Styling/AnnualFair.css";
import { useEffect } from "react";

// Import fair images from assets
import A_img from "../../assets/MataAnshuyaPhoto/a.jpg";
import B_img from "../../assets/MataAnshuyaPhoto/b.jpg";
import C_img from "../../assets/MataAnshuyaPhoto/c.jpg";
import Z_img from "../../assets/MataAnshuyaPhoto/z.jpg";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import FooterEnglish from "../../layout/Footer/FooterEnglish.jsx";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";

export default function AnnualFairEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarEnglish />
      <div className="annual-fair-body">
        <div className="anasuya-fair-page">
          <header className="anasuya-hero text-center">
            <h1>Sati Shiromani Mata Ansuya Fair</h1>
          </header>

          <div className="container py-5">
            {/* Section 1 */}
            <div className="row mb-5 align-items-center fair-section">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={A_img}
                  className="img-fluid rounded shadow"
                  alt="Temple Procession"
                />
              </div>
              <div className="col-md-6">
                <p>
                  Every year, on the Chaturdashi and Purnima (Full Moon) of the
                  month of Margashirsha, the Dattatreya Jayanti and Ansuya Fair
                  are celebrated at the Ansuya Ashram. In the local language,
                  this fair is also known as the "Naudi Mela," which literally
                  means the gathering of nine goddesses. On the day of
                  Chaturdashi, the sacred palanquins (dev-dolies) of the deities
                  begin their journey from their respective locations towards
                  the Ansuya Ashram.At night, all the sacred palanquins
                  (dev-dolies) reside in the sanctum sanctorum (garbh-griha) of
                  the Ansuya temple. On this night, couples seeking the blessing
                  of a child (known as barohi couples) participate in the night
                  vigil held in the temple's main hall. Cultural programs are
                  also organized throughout the night to entertain the devotees
                  attending the fair.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="row mb-5 align-items-center fair-section flex-md-row-reverse">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={B_img}
                  className="img-fluid rounded shadow"
                  alt="Cultural Night"
                />
              </div>
              <div className="col-md-6">
                <p>
                  On the following day, which is the Purnima (Full Moon), after
                  the rituals of worship (puja-archana) and the offering of
                  royal bhog prasad, the palanquins return to their respective
                  locations. The entire atmosphere is filled with devotion, and
                  words fall short to describe its divine beauty. Although
                  barohi couples can sit in the temple throughout the year to
                  pray for children, the Dattatreya Jayanti during the Ansuya
                  Fair holds special significance for them. This ashram,
                  renowned as the Ansuya Ashram, is named after Sati Shiromani
                  Mata Ansuya, the divine mother believed to grant the blessing
                  of children.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <h3 className="section-title text-align-center">
              Anasuya Rath Doli Temple
            </h3>

            <div className="row mb-5 align-items-center fair-section">
              {/* First Image */}
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={C_img}
                  className="img-fluid rounded shadow equal-img"
                  alt="Rathdoli mandir"
                />
              </div>

              {/* Text and Second Image */}
              <div className="col-md-6">
                <div className="row">
                  {/* Text Column */}
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <p>
                      The Ansuya Rath Doli Temple is located in the village of
                      Mandal, where worship and rituals are performed from time
                      to time. The land for the construction of the Rath Doli
                      was donated to the Ansuya Temple Trust Committee by the
                      Semwal priests of Mandal village, who also serve as the
                      priests of Mata Ansuya. It is on this donated land that
                      the Ansuya Rath Doli Temple has been established.
                    </p>
                  </div>

                  {/* Second Image Column */}
                  <div className="col-12 col-md-6">
                    <img
                      src={Z_img}
                      className="img-fluid rounded shadow equal-img"
                      alt="Second side view"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation buttons wrapper added here to maintain document flow and continuous background */}
      <div className="nav-buttons-continuous">
        <NavigationButtons
          prevLink="/FestivalsAndRitualsEnglish"
          prevText="Festivals & Rituals"
          nextLink="/DonationEnglish"
          nextText="Donation"
        />
      </div>
      <FooterEnglish />
    </>
  );
}
