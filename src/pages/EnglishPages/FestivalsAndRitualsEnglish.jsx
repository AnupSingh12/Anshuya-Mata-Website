import "../../Styling/FestivalsAndRituals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import FooterEnglish from "../../layout/Footer/FooterEnglish.jsx";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";

const festivals = [
  {
    title: "Basant Panchami",
    description:
      "On this occasion, the local people prepare Arsha and offer it as sacred food (bhog prasad) to Mata in her divine court. Prayers are also offered to the Goddess for the prosperity of the region. As prasad, the Arsha is distributed to every family in the Mandal valley.",
    image: "basnatPanchami.jpg",
  },
  {
    title: "Raksha Bandhan",
    description:
      "The festival of Raksha Bandhan is celebrated under the name Rishitarpani. On this occasion, special worship is performed by setting up a sacred puja kothi, and the court of Mata is beautifully adorned with Brahma Kamal (sacred Himalayan flowers). These very Brahma Kamals are distributed by the Ansuya Mata Trust Committee (A.M.T.C.) to each family in the villages that participate in the News-Naali system, as a form of prasad.",
    image: "RakhaBandhan.jpg",
  },
  {
    title: "Navratari Festival",
    description:
      "During the Navratri festival, the Ansuya Mandir Trust Committee (A.M.T.C.) organizes the recitation of the Navratri scriptures in the temple every year. The Sharad Navratri (Autumn Navratri) is celebrated for ten days at the Ansuya Temple in the Ansuya Ashram, while the Chaitra Navratri is observed at the Ansuya Rathdoli Temple in Mandal. On the day of Vijayadashami, the festival concludes with the distribution of *Hariyali Prasad* (green offerings), along with devotional worship, aarti, and prayer ceremonies.",
    image: "navratri.jpg",
  },
];

export default function FestivalsAndRituals() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavbarEnglish />
      <section className="festivals-section">
        <div className="overlay" />
        <div className="festivals-content">
          <h1 className="festivals-title" data-aos="fade-down">
            The festivals celebrated from time to time in the ashram.
          </h1>
          {festivals.map((festival, index) => (
            <div
              className={`festival-card ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              data-aos="fade-up"
            >
              <div className="festival-info">
                <h2>{festival.title}</h2>
                <p>{festival.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Added wrapper for NavigationButtons with the same background and overlay */}
      <div className="navigation-buttons-background">
        <div className="nav-overlay"></div>
        <NavigationButtons
          prevLink="/WorshipAndRitualsEnglish"
          prevText="Worship & Rituals"
          nextLink="/AnnualFairEnglish"
          nextText="Annual Fair"
        />
      </div>

      <FooterEnglish />
    </div>
  );
}
