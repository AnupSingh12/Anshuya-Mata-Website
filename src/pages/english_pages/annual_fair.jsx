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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
          <div className="body">
                    
             <div className="anasuya-fair-page">
      <header className="anasuya-hero text-center">
        <h1>Rathdoli of Sati Shiromani Mata Anasuya / Anasuya Fair</h1>
      </header>

      <div className="container py-5">
        {/* Section 1 */}
        <div className="row mb-5 align-items-center fair-section">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/MataAnshuyaPhoto/a.jpg" className="img-fluid rounded shadow" alt="Temple Procession" />
          </div>
          <div className="col-md-6">
            <p>
              Every year on Chaturdashi and Purnamasi of the month of Margashish, the Dattatreya Jayanti Anasuya Mela is held at Anasuya Ashram.
              It is also known as the Naudi Mela in the local language, which means the union of nine goddesses. On Chaturdashi Tithi, Dev Dolis
              from Mandal, Bandwara, Devaladhar, Sagar, and Kathud arrive at Anasuya Ashram with great devotion.
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
              Dev Dolis rest overnight in the Anasuya temple premises. The Barohi couple keeps a night vigil with the hope of being blessed with
              a child. Cultural performances entertain the crowd. On Purnima Tithi, prayers and Raj Bhog are offered before the Dev Dolis return
              to their villages. The entire event is soaked in devotion.
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
              The Anasuya Ashram is revered for fulfilling childbearing wishes. On Dattatreya Jayanti, the divine blessings are believed to be
              especially powerful for Barohi couples. Efforts by the temple trust have resulted in a well-developed website with support from
              Mandal Valley residents—ensuring the continued legacy of Mata Anasuya.
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
