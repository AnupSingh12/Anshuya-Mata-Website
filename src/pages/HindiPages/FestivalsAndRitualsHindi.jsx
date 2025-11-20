import "../../Styling/FestivalsAndRituals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";
import FooterHindi from "../../layout/Footer/FooterHindi.jsx";

const festivals = [
  {
    title: "बसन्त पंचमी",
    description:
      "इस अवसर पर माता के दरबार में क्षेत्रीय लोगों द्वारा अरशा बनाकर माता को भोग प्रसाद अर्पित किया जाता है। एवं क्षेत्रीय खुशहाली हेतु माता से प्रार्थना की जाती है। प्रसाद स्वरूप अरशा मण्डल घाटी के प्रत्येक परिवार को वितरित किया जाता है।.",
    image: "basnatPanchami.jpg",
  },
  {
    title: "रक्षाबन्धन",
    description:
      "रक्षाबन्धन पर्व (ऋषितर्पणी) के नाम से जाना जाता है। इस अवसर पर विशेष पूजा कोठी लगाकर माता की पूजा की जाती है। एवं ब्रह्मकमलों से माता का दरवार सजाया जाता है। इन्हीं ब्रह्म कमलों को अ०म०ट्र० समिति के सदस्य गांव (न्यूज - नाली) देने वाले गांवों में प्रति परिवार प्रसाद स्वरूप वितरित किये जाते हैं।",
    image: "RakhaBandhan.jpg",
  },
  {
    title: "नवरात्रि पर्व",
    description:
      "नवरात्रि पर्व पर माता के मन्दिर में नवरात्रि पाठ का आयोजन अ०म०ट्र० समिति द्वारा प्रतिवर्ष किया जाता है। शरदकालीन शारदीय नवरात्रि अनसूया मन्दिर, अनसूया आश्रम में एवं चेत्र मास के नवरात्रि अनसूया रथडोली मन्दिर मण्डल में दस दिनों तक किए जाते हैं। विजयदशमीं पर्व पर हरियाली प्रसाद वितरण कर पूजा आरती बन्दना के साथ नवरात्रि पर्व सम्पन्न किए जाते हैं।",
    image: "navratri.jpg",
  },
];

export default function FestivalsAndRituals() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavbarHindi />
      <section className="festivals-section">
        <div className="overlay" />
        <div className="festivals-content">
          <h1 className="festivals-title" data-aos="fade-down">
            आश्रम में समय-समय पर लगने वाले (मनाये जाने वाले) तीज त्यौहार
          </h1>
          <p data-aos="fade-down">
            तीज - त्यौहारों के शुभ अवसर पर मन्दिर में क्षेत्रीय लोगों के
            अतिरिक्त दूर-दूर से आए हुए भक्त जनों की भीड़ लगी रहती है। उनके द्वारा
            मन्दिर में पूजा आराधना की जाती है।
          </p>
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
          prevLink="/WorshipAndRitualsHindi"
          prevText="पूजा प्रबंधन"
          nextLink="/AnnualFairHindi"
          nextText="वार्षिक मेला"
        />
      </div>

      <FooterHindi />
    </div>
  );
}
