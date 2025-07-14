import "../../Styling/Donation.css"

function DonationHindi() {
  return (
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
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/TempleAdministrationHindi">आश्रम का प्रबन्धन </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WorshipAndManagementHindi">पूजा प्रबंधन</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/festivalsRitualsHindi">तीज त्यौहार </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/annualFairHindi">वार्षिक मेला</a> </li>
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/hindi_pages/DonationHindi">दान-पुण्य </a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/hindi_pages/WebsiteDevelopmentHindi">वेबसाइट विकास</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
        </div>
        <div>
             <section className="donation-new-wrapper">
      <div className="donation-new-hero">
        <h1 className="donation-new-heading">🙏 जय माता अनसूया </h1>
        <p className="donation-new-message">
          श्री अनसूया मंदिर को आर्थिक  सहयोग देने  के लिए हम आपके बहुत आभारी हैं। <br />
          आपका दान हमें पवित्र परंपराओं को संरक्षित करने, भक्तों की सेवा करने और हमारे मंदिर की शांति और मूलभावना को बनाए रखने में मदद करता है। <br />
          आपका हर योगदान एक आशीर्वाद है जो अनगिनत जीवन में दिव्य प्रकाश लाता है। हमारे साथ इस पवित्र मार्ग पर चलने के लिए धन्यवाद
        </p>
      </div>

      <div className="donation-new-bank">
        <h2 className="bank-title">मंदिर दान हेतु बैंक विवरण  </h2>
        <div className="bank-card">
          <p><strong>खाता नाम :</strong> श्री  अनसूया  मंदिर  ट्रस्ट समिति </p>
          <p><strong>ब्रांच का नाम :</strong> उत्तराखंड  ग्रामीण  बैंक , शाखा मंडल  </p>
          <p><strong>खाता संख्या  :</strong> 4253029920</p>
          <p><strong>आईएफएससी कोड:</strong> SBIN0RRUTGB</p>
        </div>
      </div>
    </section>
    <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
        </div>
    </div>
   
  );
}

export default DonationHindi;
