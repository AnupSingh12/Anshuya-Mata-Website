import "../../Styling/AnnualFair.css"
import React ,{useEffect} from "react"

 
export function AnnualFair(){
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
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/english_pages/introduction_e_pages">Introduction</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
          <div className="body">
                    
             <div className="anasuya-fair-page">
      <header className="anasuya-hero text-center">
        <h1>Sati Shiromani Mata Anasuya Fair</h1>
      </header>

      <div className="container py-5">
        {/* Section 1 */}
        <div className="row mb-5 align-items-center fair-section">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/MataAnshuyaPhoto/a.jpg" className="img-fluid rounded shadow" alt="Temple Procession" />
          </div>
          <div className="col-md-6">
            <p>
              Every year, on the Chaturdashi and Purnima (Full Moon) of the month of Margashirsha, the Dattatreya Jayanti and Anasuya Fair are celebrated at the Anasuya Ashram. In the local language, this fair is also known as the "Naudi Mela," which literally means the gathering of nine goddesses. On the day of Chaturdashi, the sacred palanquins (dev-dolies) of the deities begin their journey from their respective locations towards the Anasuya Ashram.At night, all the sacred palanquins (dev-dolies) reside in the sanctum sanctorum (garbh-griha) of the Anasuya temple. On this night, couples seeking the blessing of a child (known as barohi couples) participate in the night vigil held in the temple’s main hall. Cultural programs are also organized throughout the night to entertain the devotees attending the fair.
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
              On the following day, which is the Purnima (Full Moon), after the rituals of worship (puja-archana) and the offering of royal bhog prasad, the palanquins return to their respective locations. The entire atmosphere is filled with devotion, and words fall short to describe its divine beauty.

Although barohi couples can sit in the temple throughout the year to pray for children, the Dattatreya Jayanti during the Anasuya Fair holds special significance for them. This ashram, renowned as the Anasuya Ashram, is named after Sati Shiromani Mata Anasuya, the divine mother believed to grant the blessing of children.
            </p>
          </div>
        </div>

        {/* Section 3 */}
         <h3 className="section-title text-align-center">Anasuya Rath Doli Temple</h3>

        <div className="row mb-5 align-items-center fair-section">
  {/* First Image */}
  <div className="col-md-6 mb-4 mb-md-0">
    <img
      src="/MataAnshuyaPhoto/c.jpg"
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
          The Anasuya Rath Doli Temple is located in the village of Mandal, where worship and rituals are performed from time to time. The land for the construction of the Rath Doli was donated to the Anasuya Temple Trust Committee by the Semwal priests of Mandal village, who also serve as the priests of Mata Anasuya. It is on this donated land that the Anasuya Rath Doli Temple has been established.
        </p>
      </div>

      {/* Second Image Column */}
      <div className="col-12 col-md-6">
        <img
          src="/MataAnshuyaPhoto/z.jpg"
          className="img-fluid rounded shadow equal-img"
          alt="Second side view"
        />
      </div>
    </div>
  </div>
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





