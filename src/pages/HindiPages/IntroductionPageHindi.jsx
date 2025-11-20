import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";
import FooterHindi from "../../layout/Footer/FooterHindi.jsx";

// Import the NEW standard CSS file
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
      "उत्तराखण्ड राज्य में गढ़वाल मण्डल के सीमान्त जनपद चमोली के जिला मुख्यालय गोपेश्वर से 13 (तेरह किमी०) कि०मी० चमोली ऊखीमठ मोटर मार्ग पर मण्डल घाटी में स्थित अनसूया गेट नामक स्थान से 05 कि०मी० पैदल चल कर पुत्रदायिनी सती शिरोमणी माता अनसूया के आश्रम में पहुँचा जाता है। अनसूया आश्रम समुद्र तल से 7000 फीट की ऊँचाई पर स्थित सुरम्य स्थल है। माता अनसूया का मन्दिर नागर शैली में निर्मित है। आश्रम के पूरव में रूद्रनाथ मन्दिर, पश्चिम में तुंगनाथ मन्दिर, चन्द्रशिला पर्वत शिखर, उत्तर दिशा में हिमाच्छादित पर्वत श्रेणी, दक्षिण में मण्डल घाटी के 09 (नौ) गांव स्थित है।",
    image: AnshuyaMandir,
  },
  {
    content:
      "अनसूया आश्रम से 1.5 कि0मी0 की दूरी पर अति रमणीय स्थल अत्रिमुनि जी का आश्रम है, इस आश्रम में प्रवेश करने के लिए चट्टान पर लगी हुई लोहे की सांकलों को पकड़कर चट्टान पर चढ़ना होता है, एवं गुफा में पेट के बल लेट कर प्रवेश किया जाता है। इस सुरम्य आश्रम में जल प्रपात झरना) जलधारा की परिक्रमा की जाती है। यही इस आश्रम की विशेषता है जल धारा झरने के नीचे जो जलकुण्ड है इसी कुण्ड के नाम से इस स्थान को अमृत कुण्ड के नाम से जाना जाता है। इसके बारे में अनेक कविदन्तियाँ हैं।",
    image: DoliDancing,
  },
  // ... (rest of the sections)
  {
    content:
      "माता अनसूया महर्षि कर्दम एवं देवहुति की पुंत्री है। ये नौ बहिनें थीं एवं इनका एक भाई था, इनके भाई का नाम कपिल था। कपिल को भगवान विष्णु का अवतार माना जाता है। अनसूया के पति महर्षि अत्रि ब्रह्मा जी के मानस पुत्र हैं। ",
    image: FiveDoli,
  },
  {
    content:
      'अपने पतिव्रता धर्म की शक्ति के बल पर अनसूया ने पतिव्रत धर्म की परीक्षा लेने आये हुये त्रिदेवों को बालरूप में परिवर्तित कर दिया था। त्रिदेवों की पत्नियों के अनुनय विनय करने पर अनसूया ने तीनों देवों को पुनः वास्तविक रूप में प्रकट किया, अनसूया के पुत्र भगवान दत्तात्रेय जी का जन्म मार्गशीष पूर्णिमा को हुआ। दत्तात्रेय जी के जन्मोत्सव के शुभ अवसर पर दत्तात्रेय जयन्ती अनसूया मेला प्राचीन काल से अनसूया आश्रम में मनाया जाता है। स्थानीय भाषा में इस मेले को "नौदी मेला" के नाम से जाना जाता है।',
    image: Doli,
  },
  {
    content:
      "इस मेले में पुत्र दायिनी माता के आश्रम में बरोही दम्पत्ति ( पुत्र प्राप्ति की कामना से आए हुए ) मन्दिर ट्रस्ट से रसीद प्राप्त कर स्थान आरक्षित करवाते हैं। पुत्राकांक्षी स्त्रियां यहां पर उपवास में रहकर माता के दरवार में ध्यानावस्थित होकर बैठ जाती हैं। ध्यानवस्थित अवस्था में ही स्वप्न के माध्यम से माता की कृपा से फल प्राप्त होता है। पुनः प्रातः चार बजे मन्दिर खुलने पर बरोही दम्पत्ति द्वारा माता की पूजा की जाती है एवं पुजारी द्वारा श्रीसंमाद स्वरूप प्रसाद दिया जाता है।",
    image: MataAtVillage,
  },
];

export default function IntroductionPageHindi() {
  useEffect(() => {
    // THIS is the code that fixes the horizontal scrollbar issue from AOS
    document.body.style.overflowX = "hidden";
    AOS.init({ duration: 1000, once: true });

    // Cleanup function to reset body style when component unmounts
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <>
      <NavbarHindi />
      {/* Use the new string class names */}
      <main className="intro-pageContainer">
        <div className="intro-container">
          <h1 className="intro-pageHeader" data-aos="fade-down">
            अनसूया आश्रम परिचय
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
              // Updated conditional class assignment
              className={`intro-contentBlock ${
                index % 2 !== 0 ? "intro-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Image wrapper */}
              <div className="intro-imageWrapper" data-aos="fade-right">
                <img
                  src={item.image}
                  alt="Ansuya Ashram"
                  className="intro-introImg"
                />
              </div>
              {/* Text wrapper */}
              <div className="intro-textWrapper" data-aos="fade-left">
                <p className="intro-introText">{item.content}</p>
              </div>
            </div>
          ))}
          <NavigationButtons
            prevLink="/"
            prevText="Home"
            nextLink="/NearBySitesHindi"
            nextText="आश्रम के दर्शनीय स्थल"
          />
        </div>
      </main>
      <FooterHindi />
    </>
  );
}
