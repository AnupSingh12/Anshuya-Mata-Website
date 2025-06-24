
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../Styling/WorshipAndManagement.css"
import { Carousel } from 'react-bootstrap';


export function WorshipAndManagementSystem(){
    
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
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/english_pages/introduction_e_pages">Introduction</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/worship_system">Worship</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link " href="/#/pages/english_pages/website_development">Website Development</a> </li>
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
            Worship 
          </h1>

          <div className="worship-card" data-aos="fade-up">
            <div className="worship-content">
              <h3 className="section-title">Temple Worship System in the Ashram</h3>
              <p>
                Anasuya temple is open for visitors throughout the year. Puja is performed by a person nominated by the Panchayat in the morning and evening throughout the year.
                In case of Sutak Patik (birth-death) in the Semwal family, the puja is performed by the Tiwari families of Anasuya Ashram.
                Tiwari Pandit is the priest of Anasuya temple. The worship system of the temple has been going on in this manner for years.
              </p>
            </div>
            <div className="worship-image-wrapper">
              <img src="/WorshipAndManagement/Worship.jpg" alt="Worship" className="worship-image" />
            </div>
          </div>

          <div className="worship-card reverse" data-aos="fade-left">
            <div className="worship-content">
              <h3 className="section-title">Anasuya Rath Doli Temple</h3>
              <p>
                Anasuya Rath Doli Temple is situated in village Mandal. Where worship is performed from time to time. For the construction of Rath Doli, the land has been donated to Anasuya Mandir Trust Committee by Semwal Pandits of Mandal village, who are also the priests of Anasuya Mata. Anasuya Rath Doli Temple is situated on this land.
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
              <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/WorshipAndManagement/carousel4.jpg" alt="Slide 3" />
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
