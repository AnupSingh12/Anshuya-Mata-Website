
import "../../Styling/introductionEPage.css";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const sections = [
  {
    content: "In the state of Uttarakhand, within the Garhwal division, lies the border district of Chamoli. From the district headquarters at Gopeshwar, one travels 13 kilometers along the Chamoli-Ukhimath motor road to reach a place called 'Ansuya Gate' in the Mandal Valley. From there, a 5-kilometer trek leads to the ashram of Sati Shiromani Mata Ansuya, revered as the granter of children. The Ansuya Ashram is located at a scenic spot at an altitude of 7,000 feet above sea level. The temple of Mata Ansuya is built in the traditional Nagar style of architecture. To the east of the ashram lies the Rudranath Temple, to the west are the Tungnath Temple and Chandrashila mountain peak, to the north is a range of snow-covered Himalayan peaks, and to the south lie nine villages of the Mandal Valley.",
    image: "/Introduction/AnshuyaMandir.png"
  },
  {
    content: "About 1.5 kilometers from the Ansuya Ashram lies the highly picturesque hermitage of Sage Atri (Atrimuni). To enter this ashram, one must climb a rock face using iron chains fixed into the stone, and then crawl into a cave by lying flat on the stomach. This serene hermitage is known for its enchanting waterfall, around which devotees perform a circumambulation (parikrama) of the flowing stream. The unique feature of this ashram is the sacred water pond located beneath the waterfall. This pond is known as 'Amrit Kund', and the place itself derives its name from it. There are many legends and folk tales associated with this mystical site.",
    image: "/Introduction/DoliDancing.jpg"
  },
  {
    content: "Mata Ansuya was the daughter of Sage Kardam and Devahuti. She had nine sisters and one brother. Her brother's name was Kapil, who is considered an incarnation of Lord Vishnu. Ansuya's husband, Sage Atri, is regarded as a Manas Putra (mind-born son) of Lord Brahma.",
    image: "/Introduction/FiveDoli.jpg"
  },
  {
    content: "By the power of her unwavering devotion and chastity, Ansuya transformed the Trimurti—Brahma, Vishnu, and Shiva—into infants when they came to test her pativrata dharma (devotion and fidelity to her husband). Upon the earnest pleas of their consorts, Ansuya restored the three deities to their original divine forms. Her son, Lord Dattatreya, was born on the full moon day (Purnima) of the month of Margashirsha. In celebration of his birth, the Dattatreya Jayanti and the Ansuya Fair (Ansuya Mela) have been observed at the Ansuya Ashram since ancient times. In the local language, this fair is known as the 'Naudi Mela', meaning 'the gathering of nine goddesses.'",
    image: "/Introduction/Doli.jpg"
  },
  {
    content: "During this fair, barohi couples (those who come with the desire to have a child) reserve their place at the Ashram of the child-blessing goddess by obtaining a receipt from the temple trust. Women longing for a child observe a fast and sit in deep meditation within the divine court of Mata Ansuya. In this meditative state, it is believed that through dreams, they receive the blessings and grace of the goddess. At around 4 AM, when the temple doors open, the barohi couples perform a special worship of Mata Ansuya, after which the priest offers them sacred prasadam known as Shree Samvad Swaroop Prasad.",
    image: "/Introduction/MataAtVillage.jpg"
  }
];





function StartingEPages(){
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
    return(
        <div>
          <div className="Navbar">
            {/* Navbar Div */}
          
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
               <a class="navbar-brand" href="/">Home</a> 
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                   <div class="collapse navbar-collapse" id="navbarCollapse"> 
                     <ul class="navbar-nav me-auto mb-2 mb-md-0"> 
                       <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/#/pages/english_pages/introduction_e_pages">Introduction</a> </li> 
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a> </li>
                       <li class="nav-item"> <a class="nav-link" href="/#/pages/english_pages/temple_administration">Ansuya Temple Administration </a></li>
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

             <section className="introduction-section py-5">
      <div className="container">
        <h1 className="text-center heading mb-3" data-aos="fade-down">
          आश्रम का परिचय 
        </h1>

        <h2 className="text-center slogan mb-3" data-aos="fade-down">
          "नसूया विद्यते यस्यां सानुसूयेति कथ्यते"
        </h2>
        <p className="text-center slogan-meaning mb-5" data-aos="fade-up">
          अर्थात् जिसमें कोई विकार नही हैं वही निर्विकार स्वरूपा अनसूया हैं
        </p>

        {sections.map((item, index) => (
          <div
            key={index}
            className={`row align-items-center intro-block mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            data-aos="fade-up"
          >
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <img src={item.image} alt="Introduction" className="img-fluid rounded shadow intro-img" />
            </div>
            <div className="col-md-6 col-12">
              <p className="intro-text">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
          
     <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Ansuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
           
        </div>
    )
}

export default StartingEPages