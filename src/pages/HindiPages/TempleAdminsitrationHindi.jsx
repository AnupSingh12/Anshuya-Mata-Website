import "../../Styling/TempleAdministration.css";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";
import FooterHindi from "../../layout/Footer/FooterHindi.jsx";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";

export default function TempleAdministrationHindi() {
  return (
    <div className="temple-adminstration-body">
      <NavbarHindi />
      <div>
        <section className="temple-admin-hero">
          <div className="overlay">
            <div className="admin-text-wrapper">
              <h1 className="admin-hero-heading">अनसूया आश्रम का प्रबन्धन</h1>
              <p className="admin-hero-paragraph">
                अनसूया आश्रम प्रबन्धन मण्डल घाटी के 09 गावों की समिति जो अनसूया
                मन्दिर ट्रस्ट समिति के नाम से जानी जाती है, के द्वारा किया जाता
                है। इस समिति का कार्यकाल 05 वर्षों का होता है। समिति में घाटी के
                09 गावों द्वारा 01 सदस्य दिया जाता है। समिति के अध्यक्ष का चुनाव
                ट्रस्ट की आम बैठक में (न्यूज नाली) देने वाले साधारण सभा के
                सदस्यों द्वारा किया जाता है। इस प्रकार अ०म०ट्र० समिति का गठन
                किया जाता है। अध्यक्ष द्वारा गांवों से आने वाले सदस्यों में से
                सचिव एवं कोषाध्यक्ष का दायित्व प्रदान किया जाता है। सम्बन्धित
                पदों का कार्य एवं दायित्व समिति की नियमावली में उल्लेखित है, के
                अनुसार कार्य का निर्वहन किया जाता है। वर्ष में अ०म० ० समिति
                द्वारा 04 आम बैठक बुलाकर प्रबन्ध समिति साधारण सभा में विचार
                विमर्श कर मन्दिर का प्रबन्धन किया जाता है।
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="nav-buttons-background">
        <div className="overlay-nav"></div>
        <NavigationButtons
          prevLink="/NearBySitesHindi"
          prevText="आश्रम के दर्शनीय स्थल"
          nextLink="/WorshipAndRitualsHindi"
          nextText="पूजा प्रबंधन"
        />
      </div>
      <FooterHindi />
    </div>
  );
}
