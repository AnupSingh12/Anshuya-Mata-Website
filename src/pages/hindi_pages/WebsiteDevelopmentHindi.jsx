
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../Styling/WebsiteDevelopment.css"

export function WebsiteDevelopmentHindi(){
    
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return (
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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">मंदिर प्रशासन </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा एवं प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/DonationHindi">दान-पुण्य </a> </li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
            <div className='body'>
             <section className="website-dev-container">
      <div className="swirling-bg">
        <div className="glass-card container" data-aos="zoom-in">
          <h1 className="section-heading">अनसूया माता वैबसाइड़</h1>
          <p className="section-paragraph">
            सती शिरोमणि माता अनसूया की वेबसाइट को तैयार करने के लिए अनसूया मन्दिर ट्रस्ट समिति की पूर्व कार्यकारिणियों द्वारा भी भरसक प्रयास किए जाते रहें हैं। लगातार चल रहे इन प्रयासों के फल स्वरूप यह वेबसाइट तैयार हो पायी है। 
            <br /><br />
             इस वेबसाइट को तैयार करने हेतु वर्तमान कार्यकारिणी के सभी सदस्यों एवं मण्डल घाटी के प्रभुद्ध जनों का पूर्ण सहयोग प्राप्त हुआ। भविष्य में  भी इसी प्रकार के सहयोग की अपेक्षा के साथ माता का आशीर्वाद सदा बना रहे।
          </p>
          <div className="signature-box" data-aos="fade-up">
            <p>
              <strong>अध्यक्ष</strong><br />
              अनसूया मन्दिर ट्रस्ट समिति<br />
              अनसूया आश्रम, मण्डल<br />
              मो० नं०- 8126373081
            </p>
          </div>
        </div>
        
      </div>
      
      
    </section>
    
            </div>

        </div>
    )
}