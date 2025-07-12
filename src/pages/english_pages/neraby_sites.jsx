import "../../Styling/NearBySites.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sacredSites = [
  {
    title: "Forest Deities",
    desc: "Behind the Anusuya Ashram temple, stone idols of various forest deities are enshrined. These deities are reverently worshipped every day during the morning and evening rituals.",
    img: "/NearbySites/vanDeviDevta.jpg",
  },
  {
    title: "Kshetrapal",
    desc: "As the guardian deity (Kshetrapal) of Anusuya Ashram, the valiant deity Amdar Devta, a foremost attendant of Mata Anusuya, is revered. His shrine is located near the ashram. He is not only considered the guardian deity of the ashram but is also worshipped as the protector of the entire Mandal valley.",
    img: "/NearbySites/chetrapal.jpg",
  },
  {
    title: "Shiv Parvati",
    desc: "At the rear section of the Anusuya Temple stands a stone idol of Lord Shiva and Goddess Parvati, and just behind it is a sacred Shivling that is worshipped daily",
    img: "/NearbySites/shiv-parvati.jpg",
  },
  {
    title: "Dattatreya Linga",
    desc: "Lord Dattatreya is enshrined in lingam form behind the Anusuya Temple and is worshipped with daily rituals. Devotees from Maharashtra and other regions visit throughout the year to have his darshan and offer their reverence.",
    img: "/NearbySites/detatreLing.jpg",
  },
  {
    title: "Arunimanthan Rock",
    desc: "Within the forest behind the temple rests the sacred Aruni-Manthan Shila. During yajnas performed at the ashram, fire is traditionally generated on this stone by rubbing bamboo sticks together. This consecrated flame is then used to light the yajna kund.",
    img: "/NearbySites/ArunimanthanRock.png",
  },
  {
    title: "Ganesha of Chauri",
    desc: "Approximately 500 meters from the Anusuya Temple, along the pilgrimage route, stands a majestic idol of Lord Ganesha, revered as 'Chauri ke Ganesh'. As the first deity to be worshipped, devotees offer their prayers here before proceeding to seek the blessings of Mata Anusuya.",
    img: "/NearbySites/chauriKaGanesh.jpg",
  },
  {
    title: "Bhairav Nath",
    desc: "In the forest beneath the idol of Lord Ganesha is the sacred site of Lord Bhairav Nath. It is considered highly auspicious to have his darshan during the pilgrimage.",
    img: "/NearbySites/bheravnath.jpg",
  },
  {
    title: "Kumkum Tree",
    desc: "There is a Kumkum tree on the way from the ashram to Atri Muni. Very few people know about this tree. Kumkum tree is considered a very revered tree in Sanatan Dharma.",
    img: "/NearbySites/KumkumTree.png",
  },
  {
    title: "Banyan Tree (Surai)",
    desc: "Just behind the temple of Mata Ji stands a magnificent Vat Vriksha (banyan tree), gracing the ashram with its serene and picturesque presence for many years",
    img: "/NearbySites/vatVriksh-2.png",
  },
  {
    title: "Vaitarni",
    desc: "Behind the ashram is the ancient Vaitarni of the temple, constructed from timeworn chiseled stones and beautifully adorned by a sacred stream emerging from a Gomukh (cow-shaped spout).",
    img: "/NearbySites/vatrani.png",
  },
  {
    title: "Atri Ashram Waterfall",
    desc: "Located just 1.5 kilometers from Anusuya Ashram is the serene hermitage of Sage Atri. The mesmerizing waterfall beside the ashram adds to the spiritual charm of the place. Devotees often perform a sacred circumambulation (parikrama) around this divine waterfall.",
    img: "/NearbySites/AtriWaterFall.webp",
  },
];

const yatraElements = [
  { img: "/YatraPath/bheemchula.jpg", desc: "Bheemchula" },
  { img: "/YatraPath/pandavPratima.jpg", desc: "Pandav Idols" },
  { img: "/YatraPath/kulhadiChinha.jpg", desc: "Ax markings" },
  { img: "/YatraPath/prachinShilalekh.jpg", desc: "Ancient inscriptions (Bablekha)" },
  { img: "/YatraPath/RatnyaliGod.png", desc: "Ratanyali God" },
];

export function NearBySites() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="WholeBody">
      <div className="Navbar">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/introduction_e_pages">Introduction</a></li>
                <li className="nav-item"><a className="nav-link active" href="/#/pages/english_pages/neraby_sites">Nearby Sites</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/temple_administration">Temple Administration</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/worship_system">Worship</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/festivals_rituals">Festivals & Rituals</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/annual_fair">Annual Fair</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/Donation">Donation</a></li>
                <li className="nav-item"><a className="nav-link" href="/#/pages/english_pages/website_development">Website Development</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

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

      <footer className="anasuya-footer text-center py-3">
        &copy; 2025 Anasuya Mandir Trust | Chamoli, Uttarakhand
      </footer>
    </div>
  );
}
