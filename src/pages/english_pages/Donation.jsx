import "../../Styling/Donation.css"

function Donation() {
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
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
        </div>
        <div>
             <section className="donation-new-wrapper">
      <div className="donation-new-hero">
        <h1 className="donation-new-heading">🙏 Jai Mata Ansuya</h1>
        <p className="donation-new-message">
          We are deeply grateful for your willingness to support the Shri Ansuya Mandir. <br />
          Your donation helps us preserve sacred traditions, serve devotees, and maintain the serenity and spirit of our temple. <br />
          Every contribution you make is a blessing that brings divine light into countless lives. Thank you for walking this sacred path with us.
        </p>
      </div>

      <div className="donation-new-bank">
        <h2 className="bank-title">Temple Donation Bank Details</h2>
        <div className="bank-card">
          <p><strong>Account Name:</strong> Shri Ansuya Mandir Trust Committee</p>
          <p><strong>Branch Name:</strong> Uttarakhand Gramin Bank, Mandal</p>
          <p><strong>Account Number:</strong> 4253029920</p>
          <p><strong>IFSC Code:</strong> SBIN0RRUTGB</p>
        </div>
      </div>
    </section>
    <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Ansuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
        </div>
    </div>
   
  );
}

export default Donation;
