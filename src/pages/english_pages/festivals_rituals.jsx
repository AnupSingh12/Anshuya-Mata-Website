
import "../../Styling/FestivalsAndRituals.css"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';


const festivals = [
  {
    title: 'Basant Panchami',
    description:
      'On this occasion, the local people prepare Arsha and offer it as sacred food (bhog prasad) to Mata in her divine court. Prayers are also offered to the Goddess for the prosperity of the region. As prasad, the Arsha is distributed to every family in the Mandal valley.',
    image: 'basnatPanchami.jpg',
  },
  {
    title: 'Raksha Bandhan',
    description:
      'The festival of Raksha Bandhan is celebrated under the name Rishitarpani. On this occasion, special worship is performed by setting up a sacred puja kothi, and the court of Mata is beautifully adorned with Brahma Kamal (sacred Himalayan flowers). These very Brahma Kamals are distributed by the Anasuya Mata Trust Committee (A.M.T.C.) to each family in the villages that participate in the News-Naali system, as a form of prasad.',
    image: 'RakhaBandhan.jpg',
  },
  {
    title: 'Navratari Festival',
    description:
      'During the Navratri festival, the Anasuya Mandir Trust Committee (A.M.T.C.) organizes the recitation of the Navratri scriptures in the temple every year. The Sharad Navratri (Autumn Navratri) is celebrated for ten days at the Anasuya Temple in the Anasuya Ashram, while the Chaitra Navratri is observed at the Anasuya Rathdoli Temple in Mandal. On the day of Vijayadashami, the festival concludes with the distribution of *Hariyali Prasad* (green offerings), along with devotional worship, aarti, and prayer ceremonies.',
    image: 'navratri.jpg',
  },
];


export function FestivalsAndRituals(){

     useEffect(() => {
    AOS.init({ duration: 1000 });
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
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/Donation">Donation</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/website_development">Website Development</a> </li>
                     </ul>
                  
                   </div> 
               </div> 
            </nav>
          
          </div>
    <section className="festivals-section">
      <div className="overlay" />
      <div className="festivals-content">
        <h1 className="festivals-title" data-aos="fade-down">
          The festivals celebrated from time to time in the ashram.
        </h1>
        {festivals.map((festival, index) => (
          <div
            className={`festival-card ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            data-aos="fade-up"
          >
            
            <div className="festival-info">
              <h2>{festival.title}</h2>
              <p>{festival.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
        </div>
    )
}