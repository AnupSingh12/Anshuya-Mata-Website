
import "../../Styling/introductionEPage.css";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const sections = [
  {
    content: "Ansuya is a holy place where no impurity exists, and it is regarded as such. Located in the Chamoli district of Uttarakhand, near Gopeshwar (the district headquarters), the Ansuya shrine is about 12 km from Gopeshwar, situated on the Joshimath motor road. After reaching Mandal village, pilgrims must trek around 5 km through the forest to reach the revered Ansuya Mata Temple.",
    image: "/Introduction/AnshuyaMandir.png"
  },
  {
    content: "This sacred site sits at an elevation of 7,000 feet above sea level. The temple is constructed in the traditional Nagar style of Himalayan architecture. Surrounding the temple are shrines of Lord Dattatreya to the east, Lord Rudranath to the west, and Lord Tungnath to the south—all part of the Panch Kedar pilgrimage route. To the north lies the Joshimath valley and nine surrounding villages.",
    image: "/Introduction/DoliDancing.jpg"
  },
  {
    content: "At 1.5 km from the Ansuya Temple lies the revered Tapovan of Maharishi Atri, known as the Bhavishya Badri temple. The path to the temple includes trails cut through dense forest, requiring physical effort. The trail includes river crossings and steep ascents. A spring flows under a massive stone slab along the path, called the Veetr Kund, from which the place gets the name Veetr Dham. Several myths and stories are associated with this miraculous stream.",
    image: "/Introduction/FiveDoli.jpg"
  },
  {
    content: "Mata Ansuya is the goddess of penance and purity. She had nine daughters and one son, Lord Dattatreya, born from her austerities and devotion. When the goddesses Lakshmi, Parvati, and Saraswati became jealous, they urged their husbands (Vishnu, Shiva, and Brahma) to test Ansuya’s chastity. Ansuya, through her divine power, turned them into infants. Pleased with her purity, the Trimurti granted her a boon, and from them was born Lord Dattatreya — a unified incarnation of all three deities.",
    image: "/Introduction/Doli.jpg"
  },
  {
    content: "The day of Dattatreya's birth is celebrated as Ansuya Mela, a traditional fair held at the temple since ancient times. Locally, the festival is called the Nauhini Mela. During this festival, devotees from various regions gather, and the temple premises are beautifully decorated. Women pilgrims stay near the temple, praying to Ansuya Mata. It is believed that by meditating during the night, divine visions are granted. At 4 AM, the temple doors open, and a grand worship is performed. A traditional spiritual discourse is then delivered to the gathering.",
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

            <section className="introduction-section py-5">
      <div className="container">
        <h2 className="text-center slogan mb-3" data-aos="fade-down">
          "नसूया विद्यते यस्यां सानुसेयेति कथ्यते"
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
          

        
           
        </div>
    )
}

export default StartingEPages