
import "../../Styling/FestivalsAndRituals.css"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';


const festivals = [
  {
    title: 'Basant Panchami',
    description:
      'On this occasion, the local people prepare Arsha and offer it as Prasad to the Goddess in the court of the Goddess. They pray to the Goddess for the prosperity of the region. Arsha is distributed as Prasad to every family of Mandal Valley.',
    image: 'basnatPanchami.jpg',
  },
  {
    title: 'Raksha Bandhan',
    description:
      'It is known as Raksha Bandhan festival (Rishitarpani). On this occasion, special Puja Kothi is set up and the Goddess is worshipped. The Goddess\'s court is decorated with Brahma Kamals. These Brahma Kamals are distributed as prasad to each family in the villages that are given by the members of the AMT committee (News - Nali).',
    image: 'RakhaBandhan.jpg',
  },
  {
    title: 'Navratari Festival',
    description:
      'On the occasion of Navratri festival, Navratri Paath is organized every year by the A.M.T. committee in the temple of Mata. In the Sharaday Navratri of autumn, Navratri Paath is done in Anasuya temple and in the Tulagat Navratri of Chaitra month, Navratri Paath is done in Anasuya temple Rathdoli temple Mandal for the entire 10 days. On the occasion of Vijayadashmi festival, Navratri festival is concluded with the distribution of greenery prasad and Puja Aarti Bandhan.',
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
                       <li class="nav-item"> <a class="nav-link active" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals  </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Temple Administration </a></li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/worship_system">Worship </a> </li>
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
          Festivals & Rituals
        </h1>
        {festivals.map((festival, index) => (
          <div
            className={`festival-card ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            data-aos="fade-up"
          >
            <img
              src={`FestivalsAndRituals/${festival.image}`}
              alt={festival.title}
              className="festival-image"
            />
            <div className="festival-info">
              <h2>{festival.title}</h2>
              <p>{festival.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    )
}