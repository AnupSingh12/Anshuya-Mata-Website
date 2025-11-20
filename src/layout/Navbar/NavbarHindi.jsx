import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarHindi() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/IntroductionPageHindi", label: "अनसूया आश्रम परिचय" },
    { to: "/NearBySitesHindi", label: "आश्रम के दर्शनीय स्थल" },
    { to: "/TempleAdministrationHindi", label: "अनसूया आश्रम का प्रबन्धन" },
    { to: "/WorshipAndRitualsHindi", label: "पूजा प्रबंधन" },
    { to: "/FestivalsAndRitualsHindi", label: "तीज त्यौहार" },
    { to: "/AnnualFairHindi", label: "वार्षिक मेला" },
    { to: "/DonationHindi", label: "दान-पुण्य" },
    { to: "/WebsiteDevelopmentHindi", label: "वेबसाइट विकास" },
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
