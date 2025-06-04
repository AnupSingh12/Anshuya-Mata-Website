
import "../../Styling/NearBySites.css"
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const sacredSites = [
  { title: 'Forest Deities', desc: 'Stone idols of forest deities are installed behind the Anasuya Ashram temple. Forest deities are also worshipped during the daily puja in the morning and evening.', img: '/Nearby-Sites/vanDeviDevta.jpg' },
  { title: 'Kshetrapala', desc: 'As the protector of Anasuya Ashram, the foremost deity of Mata Anasuya is Veer Amdar. He is situated near the Ashram. He is known and worshipped as the protector of not only Anasuya Ashram but also the entire Mandal valley.', img: '/Nearby-Sites/chetrapal.jpg' },
  { title: 'Shiv Parvati', desc: 'At the back of the Anasuya Temple is a stone image of Shiva-Parvati, and just behind it is a Shivalinga that is worshipped daily.', img: '/Nearby-Sites/shiv-parvati.jpg' },
  { title: 'Dattatreya Linga', desc: 'Lord Dattatreya is installed in the form of Linga behind the Anasuya temple. Lord Dattatreya is worshipped daily. Devotees from Maharashtra also come to visit Lord Dattatreya throughout the year.', img: '/Nearby-Sites/detatreLing.jpg' },
  { title: 'Arunimanthan Rock', desc: 'There is Arunimanthan rock in the forest behind the temple. When a yagya is performed in the ashram, fire is produced by rubbing bamboo on this rock. The yagya kund (fire pit) is lit with this fire.', img: '/assets/sites/banyan.jpg' },
  { title: 'Ganesha of Chauri', desc: 'At a distance of 500 meters from Anasuya temple, on the way to the temple, there is a huge statue of Ganesh ji. This is known as Ganesh of Chauri. Before visiting the mother, one first visits the revered Ganesh ji and then proceeds to the temple.', img: '/Nearby-Sites/chauriKaGanesh.jpg' },
  { title: 'Bhairav Nath', desc: 'Lord Bhairav Nath is present in the forest below the Ganesha idol. Darshan of Lord Bhairav Nath is considered very auspicious during the pilgrimage.', img: '/Nearby-Sites/bheravnath.jpg' },
  { title: 'Kumkum Tree', desc: 'There is a Kumkum tree on the way from the ashram to Atri Muni. Very few people know about this tree. Kumkum tree is considered a very revered tree in Sanatan Dharma.', img: '/assets/sites/path.jpg' },
  { title: 'Banyan Tree (Sur)', desc: 'Just behind the temple of Mata ji, there is a worth seeing Banyan Tree which has been maintaining its beautiful image in the Ashram for many years.', img: '/Nearby-Sites/vatVriksh-2.jpg' },
  { title: 'Vaitarni', desc: 'Behind the Vaitarni Ashram is the ancient Vaitarni temple which is made of ancient Katuwa stones and is decorated with Gomukh water stream.', img: '/Nearby-Sites/vatrani.jpg' },
];


const yatraElements = [
  { img: '/YatraPath/bheemchula.jpg', desc: 'Bheemchula' },
  { img: '/YatraPath/pandavPratima.jpg', desc: 'Pandav Idols' },
  { img: '/YatraPath/kulhadiChinha.jpg', desc: 'Ax markings' },
  { img: '/YatraPath/prachinShilalekh.jpg', desc: 'Ancient inscriptions(Bablekha)' },
];

 export function NearBySites(){
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return(
        <div className="WholeBody">
          <div className="Navbar">
          
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
               <a class="navbar-brand" href="/">Home</a> 
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                   <div class="collapse navbar-collapse" id="navbarCollapse"> 
                     <ul class="navbar-nav me-auto mb-2 mb-md-0"> 
                       <li class="nav-item"> <a class="nav-link " aria-current="page" href="/#/pages/english_pages/introduction_e_pages">Introduction</a> </li> 
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship And Management</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>

          <div >
          <section className="sacred-sites-section">
      <div className="background-overlay">
        <div className="container py-5 text-white">
          <h1 className="text-center mb-4" data-aos="fade-down">
            Sacred and Scenic Sites of the Temple
          </h1>
          <p className="text-center mb-5" data-aos="fade-up">
            Several religious and scenic attractions exist within and around the Ansuya Temple.
          </p>

          <div className="row g-4">
            {sacredSites.map((site, idx) => (
              <div className="col-md-6 col-lg-4" key={idx} data-aos="zoom-in">
                <div className="site-card h-100">
                  <img src={site.img} alt={site.title} className="site-img" />
                  <div className="site-card-body">
                    <h5>{site.title}</h5>
                    <p>{site.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="yatra-section mt-5 pt-5" data-aos="fade-up">
            <h2 className="text-center mb-4">Deities and Ancient Inscriptions on the Yatra Path</h2>
            <div className="row gy-4">
              {yatraElements.map((elem, i) => (
                <div className="col-md-6" key={i}>
                  <div className="yatra-item d-flex align-items-center">
                    <img src={elem.img} alt="Yatra Element" className="yatra-img me-3" />
                    <p className="mb-0">{elem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section> 
         </div>  
        </div>
    )
}