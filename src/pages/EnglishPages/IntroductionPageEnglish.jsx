import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import FooterEnglish from "./../../layout/Footer/FooterEnglish.jsx";

import "../../Styling/Introduction.css";

// Import images
import AnshuyaMandir from "../../assets/Introduction/AnshuyaMandir.png";
import DoliDancing from "../../assets/Introduction/DoliDancing.jpg";
import FiveDoli from "../../assets/Introduction/FiveDoli.jpg";
import Doli from "../../assets/Introduction/Doli.jpg";
import MataAtVillage from "../../assets/Introduction/MataAtVillage.jpg";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";

// Page content (no changes)
const sections = [
  {
    content:
      "In the state of Uttarakhand, within the Garhwal division, lies the border district of Chamoli. From the district headquarters at Gopeshwar, one travels 13 kilometers along the Chamoli-Ukhimath motor road to reach a place called 'Ansuya Gate' in the Mandal Valley. From there, a 5-kilometer trek leads to the ashram of Sati Shiromani Mata Ansuya, revered as the granter of children. The Ansuya Ashram is located at a scenic spot at an altitude of 7,000 feet above sea level. The temple of Mata Ansuya is built in the traditional Nagar style of architecture. To the east of the ashram lies the Rudranath Temple, to the west are the Tungnath Temple and Chandrashila mountain peak, to the north is a range of snow-covered Himalayan peaks, and to the south lie nine villages of the Mandal Valley.",
    image: AnshuyaMandir,
  },
  {
    content:
      "About 1.5 kilometers from the Ansuya Ashram lies the highly picturesque hermitage of Sage Atri (Atrimuni). To enter this ashram, one must climb a rock face using iron chains fixed into the stone, and then crawl into a cave by lying flat on the stomach. This serene hermitage is known for its enchanting waterfall, around which devotees perform a circumambulation (parikrama) of the flowing stream. The unique feature of this ashram is the sacred water pond located beneath the waterfall. This pond is known as 'Amrit Kund', and the place itself derives its name from it. There are many legends and folk tales associated with this mystical site.",
    image: DoliDancing,
  },
  {
    content:
      "Mata Ansuya was the daughter of Sage Kardam and Devahuti. She had nine sisters and one brother. Her brother's name was Kapil, who is considered an incarnation of Lord Vishnu. Ansuya's husband, Sage Atri, is regarded as a Manas Putra (mind-born son) of Lord Brahma.",
    image: FiveDoli,
  },
  {
    content:
      "By the power of her unwavering devotion and chastity, Ansuya transformed the Trimurti—Brahma, Vishnu, and Shiva—into infants when they came to test her pativrata dharma (devotion and fidelity to her husband). Upon the earnest pleas of their consorts, Ansuya restored the three deities to their original divine forms. Her son, Lord Dattatreya, was born on the full moon day (Purnima) of the month of Margashirsha. In celebration of his birth, the Dattatreya Jayanti and the Ansuya Fair (Ansuya Mela) have been observed at the Ansuya Ashram since ancient times. In the local language, this fair is known as the 'Naudi Mela', meaning 'the gathering of nine goddesses.'",
    image: Doli,
  },
  {
    content:
      "During this fair, barohi couples (those who come with the desire to have a child) reserve their place at the Ashram of the child-blessing goddess by obtaining a receipt from the temple trust. Women longing for a child observe a fast and sit in deep meditation within the divine court of Mata Ansuya. In this meditative state, it is believed that through dreams, they receive the blessings and grace of the goddess. At around 4 AM, when the temple doors open, the barohi couples perform a special worship of Mata Ansuya, after which the priest offers them sacred prasadam known as Shree Samvad Swaroop Prasad.",
    image: MataAtVillage,
  },
];

function IntroductionPageEnglish() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    AOS.init({ duration: 1000, once: true });
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <>
      <NavbarEnglish />
      <main className="intro-pageContainer">
        <div className="intro-container">
          <h1 className="intro-pageHeader" data-aos="fade-down">
            Introduction to the Ashram
          </h1>

          <h2
            className="intro-slogan"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            "नसूया विद्यते यस्यां सानुसूयेति कथ्यते"
          </h2>
          <p
            className="intro-sloganMeaning"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            (अर्थात् जिसमें कोई विकार नही हैं वही निर्विकार स्वरूपा अनसूया हैं)
          </p>

          {sections.map((item, index) => (
            <div
              key={index}
              className={`intro-contentBlock ${
                index % 2 !== 0 ? "intro-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              <div className="intro-imageWrapper" data-aos="fade-right">
                <img
                  src={item.image}
                  alt="Ansuya Ashram"
                  className="intro-introImg"
                />
              </div>
              <div className="intro-textWrapper" data-aos="fade-left">
                <p className="intro-introText">{item.content}</p>
              </div>
            </div>
          ))}

          <NavigationButtons
            prevLink="/"
            prevText="Home"
            nextLink="/NearBySitesEnglish"
            nextText="Near By Sites"
          />
        </div>
      </main>
      <FooterEnglish />
    </>
  );
}

export default IntroductionPageEnglish;
