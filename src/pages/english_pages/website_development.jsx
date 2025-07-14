
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../Styling/WebsiteDevelopment.css"

export function WebsiteDevelopment(){
    
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
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/english_pages/introduction_e_pages">Introduction</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Ansuya Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
            <div className='body'>
             <section className="website-dev-container">
      <div className="swirling-bg">
        <div className="glass-card container" data-aos="zoom-in">
          <h1 className="section-heading">Website Development</h1>
          <p className="section-paragraph">
            Sincere efforts have also been made by the previous executive committees of the Ansuya Mandir Trust Committee to develop the website dedicated to Sati Shiromani Mata Ansuya. As a result of these continuous efforts, this website has finally been brought into existence.
            <br /><br />
            The creation of this website has been made possible with the full support of all the current executive members and the esteemed residents of the Mandal Valley. We hope for the same kind of support in the future as well, and may the blessings of Mata always remain with us.
          </p>
          <div className="signature-box" data-aos="fade-up">
            <p>
              <strong>Sd/-</strong><br />
              Chairperson<br />
              Shri Ansuya Mandir Trust Committee<br />
              Ansuya Dham, Chamoli<br />
              Mob. No. – 8126373081
            </p>
          </div>
        </div>
        
      </div>
      
      
    </section>
    
            </div>

        </div>
    )
}