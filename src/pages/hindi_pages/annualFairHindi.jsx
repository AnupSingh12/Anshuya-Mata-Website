import "../../Styling/AnnualFair.css"
import React,{useEffect} from "react"

 
export function AnnualFairHindi(){
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return( 
        <div>
          <div>
          
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
               <a class="navbar-brand" href="/">Home</a> 
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                   <div class="collapse navbar-collapse" id="navbarCollapse"> 
                     <ul class="navbar-nav me-auto mb-2 mb-md-0"> 
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/hindi_pages/introduction_page">अनसूया आश्रम परिचय</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/NearBySitesHindi">आश्रम के दर्शनीय स्थल</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार </a></li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">मंदिर प्रशासन </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा एवं प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
          <div className="body">
                    
             <div className="anasuya-fair-page">
      <header className="anasuya-hero text-center">
        <h1>सती शिरोमणि माता अनसूया की रथडोली / अनसूया मेल</h1>
      </header>

      <div className="container py-5">
        {/* Section 1 */}
        <div className="row mb-5 align-items-center fair-section">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/MataAnshuyaPhoto/a.jpg" className="img-fluid rounded shadow" alt="Temple Procession" />
          </div>
          <div className="col-md-6">
            <p>
              प्रतिवर्ष मार्गशीष माह के चतुर्दशी एवं पूर्णमासी पर अनसूया आश्रम में दत्तात्रेय जयन्ती अनसूया मेला लगता है। स्थानीय भाषा में इस े नौदी मेले के नाम से भी जाना जाता है। जिसका शाब्दिक अर्थ नौ देवियो ं के मिलन से है। इस मेले में चतुर्दशी तिथि को देव डोलियां अपने अपने स्थानो ं से अनसूया आश्रम में प्रस्थान करती हैं। जिसमे ं मुख्य रूप से मण्डल से अनसूया की रथ डोली, बणद्वारा से ज्वाला माता, देवलधार, सगर, कड़ से भी ज्वाला देवी की डोलियां अनसूया आश्रम हेतु प्रस्थान करती हैं।
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row mb-5 align-items-center fair-section flex-md-row-reverse">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/MataAnshuyaPhoto/b.jpg" className="img-fluid rounded shadow" alt="Cultural Night" />
          </div>
          <div className="col-md-6">
            <p>
              रात्रि मे ं सभी देव डोलियों को रात्रि प्रवास अनसूया मन्दिर के गर्भ ग्रह में होता है। रात्रि में बरोही दम्पत्ति पुत्र कामना की आशा से मन्दिर सभा ग्रह में रात्रि जागरण में बैठती हैं। रात्रि मे ं सांस्कृतिक कार्यक्रमों के माध्यम से मेलार्थियो ं का मनोरंजन भी किया जाता है।देव डोलिया ं दूसरे दिन पूर्णिमा तिथि को पूजा-अर्चना एवं राज भोग प्रसाद लगने के बाद अपने-अपने स्थानों को जाती ह ै ं पूरा वातावरण भक्त मय रहता है। जिसका वर्णन जितना किया जाए कम ही कम होगा। य ूँ तो मन्दिर में वर्ष भर वर कामना हेतु बरोही बैठ सकते हैं। परन्तु अनसूया मेले के दिन दत्तात्रेय जयन्ती पर्व पर बरोही हेतु विशेष महत्व माना जाता है। पुत्रदायिनी सती शिरोमणि माता अनसूया के नाम से यह आश्रम अनसूया आश्रम के नाम से विख्यात है।
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row mb-5 align-items-center fair-section">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/MataAnshuyaPhoto/c.jpg" className="img-fluid rounded shadow" alt="Raj Bhog Prasad" />
          </div>
          <div className="col-md-6">
            <p>
              सती शिरोमणि माता अनसूया की वेबसाइट को तैयार करने के लिए अनसूया मन्दिर ट्रस्ट समिति की पूर्व कार्यकारिणियो ं द्वारा भी भरसक प्रयास किए जाते रहें हैं। लगातार चल रही इन प्रयासो ं के भल स्वरूप यह वेबसाइट तैयार हो पायी है। इस वेबसाइट को तैयार करने हेतु वर्तमान कार्यकारिणी के सभी मा० सदस्यों एवं मण्डल घाटी के प्रभुद ्ध जनों का पूर्ण सहयोग प्राप्त हुआ। भविष्य मे ं भी इसी प्रकार के सहयोग की अपेक्षा के साथ माता का आशीर्वाद सदा बना रहे।
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="row text-center my-4">
          <div className="col-12 mb-3">
            <h2 className="text-dark">Fair Gallery</h2>
          </div>

          {[
            "/MataAnshuyaPhoto/d.jpg",
            "/MataAnshuyaPhoto/e.jpg",
            "/MataAnshuyaPhoto/f.jpg",
            "/MataAnshuyaPhoto/g.jpg",
            "/MataAnshuyaPhoto/h.jpg",
            "/MataAnshuyaPhoto/i.jpg"
          ].map((src, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-2 mb-4">
              <img src={src} alt={`Fair ${idx + 1}`} className="img-fluid rounded shadow-sm gallery-image" />
            </div>
          ))}
        </div>
      </div>

      <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
    </div>

          </div>
        </div>
    )
}
