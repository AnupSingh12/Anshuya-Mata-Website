
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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship And Management</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
            <div>
              <section className="temple-admin-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 admin-heading">Temple Administration of Ansuya Mandir</h1>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <p className="admin-description text-center">
              The Ansuya Temple Management Committee comprises representatives from nine surrounding villages. It functions under the name Shri Ansuya Mandir Trust Committee. The term of the committee is five years, and each village sends one member.
              The Chairperson is elected in a general body meeting. From among the elected members, a Secretary and Treasurer are appointed. The roles and responsibilities are clearly defined in the trust's bylaws. Every year, the committee holds four general meetings to discuss all matters and festival planning.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-6 head-admin-card text-center">
            <img src="/assets/images/head.jpg" alt="Head of Administration" className="img-fluid rounded-circle head-img mb-3" />
            <h3 className="head-name">Shri Bhagat Singh Bisht</h3>
            <p className="head-role">Chairperson, Ansuya Mandir Trust</p>
          </div>
        </div>

        <div className="row text-center admin-team">
          <div className="col-md-4 mb-4">
            <div className="team-card p-3">
              <img src="/assets/images/secretary.jpg" alt="Secretary" className="img-fluid rounded-circle mb-3 team-img" />
              <h5>Shri Manoj Rawat</h5>
              <p className="text-muted">Secretary</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="team-card p-3">
              <img src="/assets/images/treasurer.jpg" alt="Treasurer" className="img-fluid rounded-circle mb-3 team-img" />
              <h5>Smt. Kamla Devi</h5>
              <p className="text-muted">Treasurer</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="team-card p-3">
              <img src="/assets/images/member.jpg" alt="Senior Member" className="img-fluid rounded-circle mb-3 team-img" />
              <h5>Shri Dinesh Joshi</h5>
              <p className="text-muted">Senior Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
            
            </div>
    )
}


