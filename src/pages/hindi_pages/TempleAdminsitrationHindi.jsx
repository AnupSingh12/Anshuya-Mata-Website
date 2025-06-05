
import "../../Styling/TempleAdministration.css"


 export function TempleAdministrationHindi(){
    return(
        <div>
          <div>
          
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
               <a class="navbar-brand" href="/">Home</a> 
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                   <div class="collapse navbar-collapse" id="navbarCollapse"> 
                     <ul class="navbar-nav me-auto mb-2 mb-md-0"> 
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/hindi_pages/introduction_page">अनसूया आश्रम परिचय</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/NearBySitesHindi">आश्रम के दर्शनीय स्थल</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार</a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/hindi_pages/TempleAdministrationHindi">मंदिर प्रशासन </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा एवं प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
            <div>
              <section className="temple-admin-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 admin-heading">आश्रम का प्रबन्धन</h1>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <p className="admin-description text-center">
              अनसूया आश्रम प्रबन्धन मण्डल घाटी के 09 गावों की समिति जो अनसूया मन्दिर ट्रस्ट समिति के नाम से जानी जाती है, के द्वारा किया जाता है। इस समिति का कार्यकाल 05 वर्षों का होता है। समिति मे ं घाटी के 09 गावों द्वारा 01 सदस्य दिया जाता है। समिति के अध्यक्ष का चुनाव ट्रस्ट की आम बैठक में (न्यूज नाली) देन े वाले साधारण सभा के सदस्यों द्वारा किया जाता है। इस प्रकार अ०म०ट्र० समिति का गठन किया जाता है। अध्यक्ष द्वारा गांवों से आन े वाले सदस्यों में से सचिव एवं कोषाध्यक्ष का दायित्व प्रदान किया जाता है। सम्बन्धित पदों का कार्य एवं दायित्व समिति की नियमावली में उल्लेखित है, के अनुसार कार्य का निर्वहन किया जाता है। वर्ष में अ०म० ० समिति द्वारा 04 आम बैठक बुलाकर प्रबन्ध समिति साधारण सभा में विचार विमर्श कर मन्दिर का प्रबन्धन किया जाता है।
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


