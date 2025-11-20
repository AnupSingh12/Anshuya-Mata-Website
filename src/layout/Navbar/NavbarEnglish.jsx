import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarEnglish() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/IntroductionPageEnglish", label: "Ashram Introduction" },
    { to: "/NearBySitesEnglish", label: "Nearby Sites" },
    { to: "/TempleAdministrationEnglish", label: "Temple Administration" },
    { to: "/WorshipAndRitualsEnglish", label: "Worship & Rituals" },
    { to: "/FestivalsAndRitualsEnglish", label: "Festivals" },
    { to: "/AnnualFairEnglish", label: "Annual Fair" },
    { to: "/DonationEnglish", label: "Donations" },
    { to: "/WebsiteDevelopmentEnglish", label: "Website Development" },
  ];

  return (
    <>
      <nav className="hindi-nav-root">
        <div className="nh-content">
          {/* Logo */}
          <Link to="/" className="nh-logo">
            Home
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="nh-toggle-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className={open ? "nh-icon-close" : "nh-icon-menu"}>
              {open ? "✕" : "☰"}
            </span>
          </button>

          {/* Desktop Menu */}
          <ul className="nh-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="nh-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay (Click outside to close) */}
      <div
        className={`nh-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Slide Menu */}
      <div className={`nh-mobile-menu ${open ? "open" : ""}`}>
        <div className="nh-mobile-header">
          <span className="nh-mobile-logo-text">मेन्यू</span>
          <button className="nh-close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <ul className="nh-mobile-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="nh-mobile-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
