
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../Styling/WorshipAndManagement.css"



export function WorshipAndManagementSystemHindi(){
    
    useEffect(() => {
    AOS.init({ duration: 1200 });
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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">अनसूया आश्रम का प्रबन्धन</a></li>
                       <li class="nav-item"> <a class="nav-link  active" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/DonationHindi">दान-पुण्य </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>

          <div className='body'>
             <section className="worship-section">
      <div className="divine-background">
        <div className="container py-5">
          <h1 className="text-center worship-heading mb-5" data-aos="fade-down">
             पूजा की व्यवस्था
          </h1>

          <div className="worship-card" data-aos="fade-up">
            <div className="worship-content">
              <h3 className="section-title">आश्रम में मन्दिर  पूजा व्यवस्था</h3>
              <p>
                अनसूया मन्दिर पूरे वर्ष भर दर्शनार्थियों के लिए खुला रहता है। वर्ष भर सुबह शायं अनसूया माता के पुजारी सेमवाल पण्डितों द्वारा पूजा सम्पन्न की जाती है । सेमवाल परिवार में सूतक पातक (जन्म-मरण) होने की स्थिति में अनसूया आश्रम के तिवाडी पण्डितों द्वारा पूजा सम्पन्न की जाती है। तिवाडी पण्डित अनसूया मन्दिर के पुरोहित हैं। मन्दिर की पूजा व्यवस्था वर्षों से इसी भांति चली आ रही है।
              </p>
            </div>
            <div className="worship-image-wrapper">
              <img src="/WorshipAndManagement/Worship.jpg" alt="Worship" className="worship-image" />
            </div>
          </div>


          <blockquote className="blockquote text-center mt-5" data-aos="fade-up">
            <p className="mb-0">“माता अनसूया की कृपा सभी पर बनी रहे”</p>
            <br></br>
            <footer className="blockquote-footer">अनसूया भक्त </footer>
          </blockquote>
        </div>
      </div>
      
    </section>
    <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
    
          </div>
          
            
        </div>
    )
};
