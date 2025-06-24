
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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
            <div>
              <section className="temple-admin-hero">
                <div className="overlay">
                  <div className="admin-text-wrapper">
                    <h1 className="admin-hero-heading">Temple Administration</h1>
                      <p className="admin-hero-paragraph">
                        The Ansuya Temple Management Committee comprises representatives from nine surrounding villages. It functions under the name Shri Ansuya Mandir Trust Committee. The term of the committee is five years, and each village sends one member.
                        The Chairperson is elected in a general body meeting. From among the elected members, a Secretary and Treasurer are appointed. The roles and responsibilities are clearly defined in the trust's bylaws. Every year, the committee holds four general meetings to discuss all matters and festival planning.
                      </p>
                  </div>
                </div>
              </section>
            </div>
            
          </div>
    )
}




