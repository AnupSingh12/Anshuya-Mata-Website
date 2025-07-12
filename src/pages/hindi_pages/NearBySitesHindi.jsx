import "../../Styling/NearBySites.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import vanDeviDevta from "../../assets/NearbySites/vanDeviDevta.jpg";
import chetrapal from "../../assets/NearbySites/chetrapal.jpg";
import shivParvati from "../../assets/NearbySites/shiv-parvati.jpg";
import dattatreLing from "../../assets/NearbySites/detatreLing.jpg";
import arunimanthanRock from "../../assets/NearbySites/ArunimanthanRock.png";
import chauriKaGanesh from "../../assets/NearbySites/chauriKaGanesh.jpg";
import bheravnath from "../../assets/NearbySites/bheravnath.jpg";
import kumkumTree from "../../assets/NearbySites/KumkumTree.png";
import vatVriksh from "../../assets/NearbySites/vatVriksh-2.png";
import vatrani from "../../assets/NearbySites/vatrani.png";
import atriWaterFall from "../../assets/NearbySites/AtriWaterFall.webp";

import bheemchula from "../../assets/YatraPath/bheemchula.jpg";
import pandavPratima from "../../assets/YatraPath/pandavPratima.jpg";
import kulhadiChinha from "../../assets/YatraPath/kulhadiChinha.jpg";
import prachinShilalekh from "../../assets/YatraPath/prachinShilalekh.jpg";
import ratnyaliGod from "../../assets/YatraPath/RatnyaliGod.png";

const sacredSites = [
  { title: "वन देवी-देवता", desc: "अनसूया आश्रम मन्दिर के पीछे  वन देवी-देवताओं की पत्थर की मूर्तियां स्थापित हैं। प्रतिदिन पूजा के समय सुबह-शायं वन देवी-देवताओं की भी पूजा की जाती है।", img: vanDeviDevta },
  { title: "क्षेत्रपाल", desc: "अनसूया आश्रम के क्षेत्रपाल के रूप में माता अनसूया के अग्रिम वीर अम्दार देवता हैं। जो आश्रम के समीप स्थित हैं। ये अनसूया आश्रम के ही नहीं बल्कि पूरी मण्डल घाटी के क्षेत्रपाल देवता के नाम से जाने एवं पूजे जाते हैं।", img: chetrapal },
  { title: "शिव पार्वती", desc: "अनसूया मन्दिर के पृष्ठ भाग में शिव-पार्वती की पत्थर प्रतिमा है, एवं ठीक पीछे  शिवलिंग जिसकी प्रतिदिन पूजा की जाती है।", img: shivParvati },
  { title: "दत्तात्रेय लिंग", desc: "अनसूया मन्दिर के पीछे  भगवान दत्तात्रेय लिंग स्वरूप में स्थापित हैं। भगवान दत्तात्रेय की नित्य प्रतिपूजा की जाती रहती है। दत्तात्रेय भगवान के दर्शन हेतु वर्षभर महाराष्ट्र से भी श्रद्धालु आते ही रहते हैं।", img: dattatreLing },
  { title: "अरुणीमन्धन शिला", desc: "मन्दिर के पीछे  पड़ने वाले जंगल में अरूणीमन्थन शिला है। आश्रम में यज्ञ होने पर इसी शिला पर बांस रगडकर आग उत्पन्न की जाती है। इसी अग्नि से यज्ञ कुण्ड प्रज्ज्वलित किया जाता है।", img: arunimanthanRock },
  { title: "चौरी के गणेश", desc: "अनसूया मन्दिर से 500 मी० की दूरी पर मन्दिर जाने वाले यात्रा मार्ग पर सर्व प्रथम गणेश जी की विशाल मूर्ति है। इसे ही चौंरी के गणेश के नाम से जाना जाता है। माता के दर्शन से पूर्व प्रथम पूज्य गणेश जी के दर्शन कर मन्दिर में प्रस्थान किया जाता है।", img: chauriKaGanesh },
  { title: "भैरव नाथ", desc: "गणेश प्रतिमा के नीचे  के जंगल में भगवान भैरव नाथ जी हैं। यात्रा के दौरान भगवान भैरव नाथ के दर्शन अति शुभ माने जाते हैं।", img: bheravnath },
  { title: "कुमकुम वृक्ष", desc: "आश्रम से अत्रिमुनि जाने वाले मार्ग के ऊपर कुमकुम वृक्ष है। इस वृक्ष के बारे में बहुत कम लोगों को ही जानकारी है। कुमकुम वृक्ष सनातन धर्म में अत्यन्त पूजनीय वृक्ष माना जाता है।", img: kumkumTree },
  { title: "वट वृक्ष (सुरई)", desc: "माता जी के मन्दिर के ठीक पीछे  दर्शनीय वट वृक्ष है जो कि आश्रम में कई वर्षों से अपनी सुरम्य क्षवि बनाए हुए है।", img: vatVriksh },
  { title: "वैतरणी", desc: "आश्रम की पीछे  मन्दिर की प्राचीन वैतरणी है जो प्राचीन कटुवा पत्थरों से निर्मित एवं गोमुख जलधार से सुशोभित है।", img: vatrani },
  { title: "अत्रि आश्रम जल प्रपात", desc: "अनसूया आश्रम से 1.5 किमी० की दूरी पर अत्रि मुनि जी का आश्रम है। जहाँ पर अत्रि आश्रम जल प्रपात की शोभा अत्यन्त रमणीय एवं मनोहारी है। इसी जल प्रपात की परिक्रमा की जाती है।", img: atriWaterFall },
];

const yatraElements = [
  { img: bheemchula, desc: "भीमचूला" },
  { img: pandavPratima, desc: "पाण्डव प्रतिमा" },
  { img: kulhadiChinha, desc: "कुल्हाड़ी चिह्न" },
  { img: prachinShilalekh, desc: "प्राचीन शिलालेख (बबलेखा)" },
  { img: ratnyaliGod, desc: "रतन्याली देवता" },
];


export function NearBySitesHindi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="WholeBody">
      <div className="Navbar">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/introduction_page">अनसूया आश्रम परिचय</a></li>
                <li className="nav-item"><a className="nav-link active" href="/#/pages/hindi_pages/NearBySitesHindi">आश्रम के दर्शनीय स्थल</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">मंदिर प्रशासन</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा प्रबंधन</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/DonationHindi">दान-पुण्य</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <section className="sacred-sites-section">
        <div className="background-overlay">
          <div className="container py-5 text-white">
            <h1 className="text-center mb-4" data-aos="fade-down">
              आश्रम के दर्शनीय स्थल
            </h1>
            <p className="text-center mb-5" data-aos="fade-up">
              अनसूया आश्रम में वन देवी-देवताओं, क्षेत्रपाल, शिव-पार्वती की पत्थर की मूर्तियां, अरुणिमन्थन शिला, चौरी की गणेश, भैरव नाथ, कुमकुम वृक्ष, अत्रि आश्रम जल प्रपात आदि दर्शनीय स्थल हैं। जो आश्रम की इर्द-गिर्द स्थित हैं।
            </p>

            <div className="row g-4">
              {sacredSites.map((site, idx) => (
                <div className="col-md-6 col-lg-4" key={idx} data-aos="zoom-in">
                  <div className="site-card h-100">
                    <img src={site.img} alt={site.title} className="site-img" />
                    <div className="site-card-body">
                      <h5>{site.title}</h5>
                      <p>{site.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="yatra-section mt-5 pt-5" data-aos="fade-up">
              <h2 className="text-center mb-4">
                अनसूया आश्रम जाने वाले यात्रा मार्ग में पड़ने वाले देवी-देवता एवं प्राचीन चिह्न / लेख
              </h2>
              <div className="row gy-4">
                {yatraElements.map((elem, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="yatra-item d-flex align-items-center">
                      <img src={elem.img} alt={elem.desc} className="yatra-img me-3" />
                      <p className="mb-0">{elem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
    </div>
  );
}
