
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
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
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
                    <h1 className="admin-hero-heading">Temple Administration</h1>
                      <p className="admin-hero-paragraph">
                        The management of the Anasuya Ashram is carried out by a committee representing the nine villages of the Mandal Valley, known as the Anasuya Temple Trust Committee. The term of this committee is five years. Each of the nine villages nominates one member to the committee.The President of the committee is elected during the general meeting of the trust by the members of the general body who have the right to vote (referred to as "News Naali"). This is how the A.M.T. Committee (Anasuya Mandir Trust Committee) is formed.The President then appoints the Secretary and the Treasurer from among the members representing the villages. The roles and responsibilities of each position are defined in the rules and regulations of the committee and are carried out accordingly.Every year, the A.M.T. Committee calls four general meetings, during which the management and affairs of the temple are discussed and administered through deliberation in the general assembly.
                      </p>
                  </div>
                </div>
              </section>
            </div>
            <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
            
          </div>
    )
}




