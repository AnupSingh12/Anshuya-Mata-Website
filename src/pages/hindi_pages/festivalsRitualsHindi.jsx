
import "../../Styling/FestivalsAndRituals.css"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';


const festivals = [
  {
    title: 'बसन्त पंचमी',
    description:
      'इस अवसर पर माता के दरबार में क्षेत्रीय लोगों द्वारा अरशा बनाकर माता को भोग प्रसाद अर्पित किया जाता है। एवं क्षेत्रीय खुशहाली हेतु माता से प्रार्थना की जाती है। प्रसाद स्वरूप अरशा मण्डल घाटी के प्रत्येक परिवार को वितरित किया जाता है।.',
    image: 'basnatPanchami.jpg',
  },
  {
    title: 'रक्षाबन्धन',
    description:
      'रक्षाबन्धन पर्व (ऋषितर्पणी) के नाम से जाना जाता है। इस अवसर पर विशेष पूजा कोठी लगाकर माता की पूजा की जाती है। एवं ब्रह्मकमलों से माता का दरवार सजाया जाता है। इन्हीं ब्रह्म कमलों को अ०म०ट्र० समिति के सदस्य गांव (न्यूज - नाली) देने वाले गांवों में प्रति परिवार प्रसाद स्वरूप वितरित किये जाते हैं।',
    image: 'RakhaBandhan.jpg',
  },
  {
    title: 'नवरात्रि पर्व',
    description:
      'नवरात्रि पर्व पर माता के मन्दिर में नवरात्रि पाठ का आयोजन अ०म०ट्र० समिति द्वारा प्रतिवर्ष किया जाता है। शरदकालीन शारदीय नवरात्रि अनसूया मन्दिर, अनसूया आश्रम में एवं चेत्र मास के नवरात्रि अनसूया रथडोली मन्दिर मण्डल में दस दिनों तक किए जाते हैं। विजयदशमीं पर्व पर हरियाली प्रसाद वितरण कर पूजा आरती बन्दना के साथ नवरात्रि पर्व सम्पन्न किए जाते हैं।',
    image: 'navratri.jpg',
  },
];


export function FestivalsAndRitualsHindi(){

     useEffect(() => {
    AOS.init({ duration: 1000 });
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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">आश्रम का प्रबन्धन</a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/DonationHindi">दान-पुण्य </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
    <section className="festivals-section">
      <div className="overlay" />
      <div className="festivals-content">
        <h1 className="festivals-title" data-aos="fade-down">
          आश्रम में समय-समय पर लगने वाले (मनाये जाने वाले) तीज त्यौहार
        </h1>
        <p data-aos="fade-down" >तीज - त्यौहारों के शुभ अवसर पर मन्दिर में क्षेत्रीय लोगों के अतिरिक्त दूर-दूर से आए हुए भक्त जनों की भीड़ लगी रहती है। उनके द्वारा मन्दिर में पूजा आराधना की जाती है।</p>
        {festivals.map((festival, index) => (
          <div
            className={`festival-card ${index % 2 === 0 ? 'left' : 'right'}`}
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
    <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
        </div>
    )
}