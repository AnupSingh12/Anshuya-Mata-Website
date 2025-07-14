
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../Styling/WorshipAndManagement.css"


export function WorshipAndManagementSystem(){
    
    useEffect(() => {
    AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className='page-wrapper'>
          <div>
          
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
               <a class="navbar-brand" href="/">Home</a> 
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                   <div class="collapse navbar-collapse" id="navbarCollapse"> 
                     <ul class="navbar-nav me-auto mb-2 mb-md-0"> 
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/english_pages/introduction_e_pages">Introduction</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Ansuya Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/worship_system">Worship </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
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
             Provision for Ritual Offerings
          </h1>

          <div className="worship-card" data-aos="fade-up">
            <div className="worship-content">
              <h3 className="section-title">Temple Worship procedure in the Ashram</h3>
              <p>
                The Ansuya Temple remains open to devotees throughout the year. Daily worship is performed every morning and evening by the Semwal priests. In cases of sūtak or pātak (ritual impurity due to birth or death) within the Semwal family, the worship is carried out by the Tiwari families of the Ansuya Ashram.

The Tiwari priests serve as the traditional priests (purohits) of the Ansuya Temple. This system of worship has been followed in the same manner for generations.
              </p>
            </div>
            <div className="worship-image-wrapper">
              <img src="/WorshipAndManagement/Worship.jpg" alt="Worship" className="worship-image" />
            </div>
          </div>


          <blockquote className="blockquote text-center mt-5" data-aos="fade-up">
            <p className="mb-0">“May the blessings of Mata Ansuya be upon everyone.”</p>
            <br></br>
            <footer className="blockquote-footer">Ansuya Devotee</footer>
          </blockquote>
        </div>
      </div>
      
    </section>
    <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Ansuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
          </div>
          
            
        </div>
    )
};
