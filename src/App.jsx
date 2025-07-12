import "./App.css"
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import StartingEPages from "./pages/english_pages/introduction_e_pages";
import NearBySites from "./pages/english_pages/neraby_sites";
import { AnnualFair } from "./pages/english_pages/annual_fair";
import { TempleAdministration } from "./pages/english_pages/temple_administration";
import { FestivalsAndRituals} from "./pages/english_pages/festivals_rituals";
import { WorshipAndManagementSystem} from './pages/english_pages/worshipAndManagement';
import { WebsiteDevelopment } from "./pages/english_pages/website_development";
import Donation from "./pages/english_pages/Donation";
import StartingPage from "./pages/hindi_pages/introduction_page";
import { AnnualFairHindi } from "./pages/hindi_pages/annualFairHindi";
import { FestivalsAndRitualsHindi } from "./pages/hindi_pages/festivalsRitualsHindi";
import { NearBySitesHindi } from "./pages/hindi_pages/NearBySitesHindi";
import { TempleAdministrationHindi } from "./pages/hindi_pages/TempleAdminsitrationHindi";
import { WebsiteDevelopmentHindi } from "./pages/hindi_pages/WebsiteDevelopmentHindi";
import { WorshipAndManagementSystemHindi } from "./pages/hindi_pages/WorshipAndManagementHindi";
import DonationHindi from "./pages/hindi_pages/DonationHindi";




function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pages/english_pages/introduction_e_pages" element={<StartingEPages/>} />
      <Route path="/pages/english_pages/neraby_sites" element={<NearBySites/>} />
      <Route path="/pages/english_pages/annual_fair" element={<AnnualFair/>} />
      <Route path="/pages/english_pages/temple_administration" element={<TempleAdministration/>} />
      <Route path="/pages/english_pages/festivals_rituals" element={<FestivalsAndRituals/>} />
      <Route path="/pages/english_pages/worship_system" element={<WorshipAndManagementSystem/>} />
      <Route path="/pages/english_pages/website_development" element={<WebsiteDevelopment/>} /> 
      <Route path="/pages/english_pages/Donation" element={<Donation/>} />
      <Route path="/pages/hindi_pages/annualFairHindi" element={<AnnualFairHindi/>} />
      <Route path="/pages/hindi_pages/introduction_page" element={<StartingPage/>} />
      <Route path="/pages/hindi_pages/festivalsRitualsHindi" element={<FestivalsAndRitualsHindi/>} />
      <Route path="/pages/hindi_pages/NearBySitesHindi" element={<NearBySitesHindi/>} />
      <Route path="/pages/hindi_pages/TempleAdministrationHindi" element={<TempleAdministrationHindi/>} />
      <Route path="/pages/hindi_pages/WebsiteDevelopmentHindi" element={<WebsiteDevelopmentHindi/>} />
      <Route path="/pages/hindi_pages/WorshipAndManagementHindi" element={<WorshipAndManagementSystemHindi/>} />
      <Route path="//pages/hindi_pages/DonationHindi" element={<DonationHindi/>} />
       
    </Routes>
   </Router>

    
    
  );
}

export default App;
