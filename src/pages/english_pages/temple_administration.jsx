
import "../../Styling/TempleAdministration.css"


 export function TempleAdministration(){
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
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/temple_administration">Ansuya Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
            <div className="body">
              <section className="temple-admin-hero">
                <div className="overlay">
                  <div className="admin-text-wrapper">
                    <h1 className="admin-hero-heading">Ansuya Temple Administration</h1>
                      <p className="admin-hero-paragraph">
                        The Ansuya Mandir Trust Committee (A.M.T.) manages the Ansuya Ashram and consists of one representative from each of the nine villages in the Mandal Valley. The committee serves a five-year term. The President is elected by the general body ("News Naali") and appoints the Secretary and Treasurer from among the members. Roles are defined by the committee's rules. Four general meetings are held annually to discuss and manage temple affairs.
                      </p>
                  </div>
                </div>
              </section>
            </div>
            <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Ansuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
            
          </div>
    )
}




