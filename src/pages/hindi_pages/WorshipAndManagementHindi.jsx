
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../Styling/WorshipAndManagement.css"
import { Carousel } from 'react-bootstrap';


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
                       <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/#/pages/hindi_pages/introduction_page">अनसूया आश्रम परिचय</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/NearBySitesHindi">आश्रम के दर्शनीय स्थल</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार</a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">मंदिर प्रशासन </a></li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा एवं प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link " href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
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
             आश्रम का प्रबन्धन एवं पूजा की व्यवस्था
          </h1>

          <div className="worship-card" data-aos="fade-up">
            <div className="worship-content">
              <h3 className="section-title">आश्रम मे ं मन्दिर  पूजा व्यवस्था</h3>
              <p>
                अनसूया मन्दिर पूरे वर्ष भर दर्शनार्थियो ं के लिए खुला रहता है। वर्ष भर सुबह शायं पुजारी पंचायत द्वारा नामित व्यक्ति द्वारा पूजा सम्पन्न की जाती है। सेमवाल परिवार में सूतक पातिक (जन्म-मरण) होने की स्थिति में अनसूया आश्रम के तिवारी परिवारों द्वारा पूजा सम्पन्न की जाती है। तिवारी पण्डित अनसूया मन्दिर के पुरोहित हैं। मन्दिर की पूजा व्यवस्था वर्षों से इसी भांति चली आ रही है।
              </p>
            </div>
            <div className="worship-image-wrapper">
              <img src="/WorshipAndManagement/Worship.jpg" alt="Worship" className="worship-image" />
            </div>
          </div>

          <div className="worship-card reverse" data-aos="fade-left">
            <div className="worship-content">
              <h3 className="section-title">अनसूया रथ डोली मन्दिर</h3>
              <p>
                अनसूया रथ डोली मन्दिर ग्राम मण्डल में स्थित हैं। जहा ँ समय-समय पर पूजा आराधना सम्पन्न की जाती है। रथ डोली निर्माण हेत ु भूम ि मण्डल ग्राम के सेमवाल पण्डितों, जो कि अनसूया माता के पुजारी भी हैं, के द्वारा भूम ि अनसूया मन्दिर ट्रस्ट समिति को दान स्वरूप प्रदान की गई है। इसी भूम ि अनसूया रथ डोली मन्दिर स्थापित है।
              </p>
            </div>
            <div className="worship-image-wrapper">
              <img src="/WorshipAndManagement/Management.jpg" alt="Management" className="worship-image" />
            </div>
          </div>

          <div className="image-carousel mt-5" data-aos="zoom-in">
            <h3 className="text-center mb-3">Temple Moments</h3>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/WorshipAndManagement/carousel.jpg" alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/WorshipAndManagement/carousel2.jpg" alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/WorshipAndManagement/carousel3.jpg" alt="Slide 3" />
              </Carousel.Item>
            </Carousel>
          </div>

          <blockquote className="blockquote text-center mt-5" data-aos="fade-up">
            <p className="mb-0">“May the grace of Mata Anasuya be upon all.”</p>
            <footer className="blockquote-footer">Anasuya Devotee</footer>
          </blockquote>
        </div>
      </div>
    </section>
          </div>
          
            
        </div>
    )
};
