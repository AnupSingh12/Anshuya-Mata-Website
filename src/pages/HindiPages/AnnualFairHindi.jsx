import "../../Styling/AnnualFair.css";
import { useEffect } from "react";

// Import fair images from assets
import A_img from "../../assets/MataAnshuyaPhoto/a.jpg";
import B_img from "../../assets/MataAnshuyaPhoto/b.jpg";
import C_img from "../../assets/MataAnshuyaPhoto/c.jpg";
import Z_img from "../../assets/MataAnshuyaPhoto/z.jpg";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";
import FooterHindi from "../../layout/Footer/FooterHindi.jsx";
import NavbarHindi from "../../layout/Navbar/NavbarHindi.jsx";

export default function AnnualFairHindi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarHindi />
      <div className="annual-fair-body">
        <div className="anasuya-fair-page">
          <header className="anasuya-hero text-center">
            <h1>सती शिरोमणि माता अनसूया मेला</h1>
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
                  प्रतिवर्ष मार्गशीष माह के चतुर्दशी एवं पूर्णमासी पर अनसूया
                  आश्रम में दत्तात्रेय जयन्ती अनसूया मेला लगता है। स्थानीय भाषा
                  में इसे नौदी मेले के नाम से भी जाना जाता है। जिसका शाब्दिक
                  अर्थ नौ देवियों के मिलन से है। इस मेले में चतुर्दशी तिथि को
                  देव डोलियां अपने अपने स्थानों से अनसूया आश्रम को प्रस्थान करती
                  हैं।
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
                  रात्रि में सभी देव डोलियों का रात्रि प्रवास अनसूया मन्दिर के
                  गर्भ ग्रह में होता है। रात्रि में बरोही दम्पत्ति पुत्र कामना
                  की आशा से मन्दिर सभा ग्रह में रात्रि जागरण में बैठती हैं।
                  रात्रि में सांस्कृतिक कार्यक्रमों के माध्यम से मेलार्थियों का
                  मनोरंजन भी किया जाता है।देव डोलियां दूसरे दिन पूर्णिमा तिथि को
                  पूजा-अर्चना एवं राज भोग प्रसाद लगने के बाद अपने-अपने स्थानों
                  को जाती हैं पूरा वातावरण भक्त मय रहता है। जिसका वर्णन जितना
                  किया जाए कम ही कम होगा। यूँ तो मन्दिर में वर्ष भर वर कामना
                  हेतु बरोही बैठ सकते हैं। परन्तु अनसूया मेले के दिन दत्तात्रेय
                  जयन्ती पर्व पर बरोही हेतु विशेष महत्व माना जाता है।
                  पुत्रदायिनी सती शिरोमणि माता अनसूया के नाम से यह आश्रम अनसूया
                  आश्रम के नाम से विख्यात है।
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <h3 className="section-title text-align-center">
              अनसूया रथ डोली मन्दिर
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
                      अनसूया रथ डोली मन्दिर ग्राम मण्डल में स्थित हैं। जहाँ
                      समय-समय पर पूजा आराधना सम्पन्न की जाती है। रथ डोली निर्माण
                      हेतु भूमि मण्डल ग्राम के सेमवाल पण्डितों, जो कि अनसूया
                      माता के पुजारी भी हैं, के द्वारा भूमि अनसूया मन्दिर ट्रस्ट
                      समिति को दान स्वरूप प्रदान की गई है। इसी भूमि में अनसूया
                      रथ डोली मन्दिर स्थापित है।
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
          prevLink="/FestivalsAndRitualsHindi"
          prevText="वार्षिक मेला"
          nextLink="/DonationHindi"
          nextText="दान-पुण्य"
        />
      </div>
      <FooterHindi />
    </>
  );
}
