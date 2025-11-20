import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import IntroductionPageEnglish from "./pages/EnglishPages/IntroductionPageEnglish.jsx";
import NearBySites from "./pages/EnglishPages/NearBySiteEnglish.jsx";
import AnnualFairEnglish from "./pages/EnglishPages/AnnualFairEnglish.jsx";
import TempleAdministration from "./pages/EnglishPages/TempleAdministrationEnglish.jsx";
import FestivalsAndRituals from "./pages/EnglishPages/FestivalsAndRitualsEnglish.jsx";
import WorshipAndRitualsEnglish from "./pages/EnglishPages/WorshipAndRitualsEnglish.jsx";
import WebsiteDevelopment from "./pages/EnglishPages/WebsiteDevelopmentEnglish.jsx";
import Donation from "./pages/EnglishPages/DonationEnglish.jsx";
import StartingPage from "./pages/HindiPages/IntroductionPageHindi.jsx";
import AnnualFairHindi from "./pages/HindiPages/AnnualFairHindi.jsx";
import FestivalsAndRitualsHindi from "./pages/HindiPages/FestivalsAndRitualsHindi.jsx";
import NearBySitesHindi from "./pages/HindiPages/NearBySitesHindi.jsx";
import TempleAdministrationHindi from "./pages/HindiPages/TempleAdminsitrationHindi.jsx";
import WebsiteDevelopmentHindi from "./pages/HindiPages/WebsiteDevelopmentHindi.jsx";
import WorshipAndRitualsHindi from "./pages/HindiPages/WorshipAndRitualsHindi.jsx";
import DonationHindi from "./pages/HindiPages/DonationHindi.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/IntroductionPageEnglish"
          element={<IntroductionPageEnglish />}
        />
        <Route path="/NearBySitesEnglish" element={<NearBySites />} />
        <Route path="/AnnualFairEnglish" element={<AnnualFairEnglish />} />
        <Route
          path="/TempleAdministrationEnglish"
          element={<TempleAdministration />}
        />
        <Route
          path="/FestivalsAndRitualsEnglish"
          element={<FestivalsAndRituals />}
        />
        <Route
          path="/WorshipAndRitualsEnglish"
          element={<WorshipAndRitualsEnglish />}
        />
        <Route
          path="/WebsiteDevelopMentEnglish"
          element={<WebsiteDevelopment />}
        />
        <Route path="/DonationEnglish" element={<Donation />} />
      </Routes>

      <Routes>
        <Route path="/AnnualFairHindi" element={<AnnualFairHindi />} />
        <Route path="/IntroductionPageHindi" element={<StartingPage />} />
        <Route
          path="/FestivalsAndRitualsHindi"
          element={<FestivalsAndRitualsHindi />}
        />
        <Route path="/NearBySitesHindi" element={<NearBySitesHindi />} />
        <Route
          path="/TempleAdministrationHindi"
          element={<TempleAdministrationHindi />}
        />
        <Route
          path="/WebsiteDevelopmentHindi"
          element={<WebsiteDevelopmentHindi />}
        />
        <Route
          path="/WorshipAndRitualsHindi"
          element={<WorshipAndRitualsHindi />}
        />
        <Route path="/DonationHindi" element={<DonationHindi />} />
      </Routes>
    </Router>
  );
}

export default App;
