import "./App.css"
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import StartingEPages from "./pages/english_pages/introduction_e_pages";
import StartingPage from "./pages/hindi_pages/introduction_page";
import { NearBySites } from "./pages/english_pages/neraby_sites";
import { AnnualFair } from "./pages/english_pages/annual_fair";
import { TempleAdministration } from "./pages/english_pages/temple_administration";
import { FestivalsAndRituals} from "./pages/english_pages/festivals_rituals";
import { WorshipAndManagementSystem} from './pages/english_pages/worshipAndManagement';
import { WebsiteDevelopment } from "./pages/english_pages/website_development";




function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pages/english_pages/introduction_e_pages" element={<StartingEPages/>} />
      <Route path="/pages/english_pages/neraby_sites" element={<NearBySites/>} />
      <Route path="/pages/hindi_pages/introduction_page" element={<StartingPage/>} />
      <Route path="/pages/english_pages/annual_fair" element={<AnnualFair/>} />
      <Route path="/pages/english_pages/temple_administration" element={<TempleAdministration/>} />
      <Route path="/pages/english_pages/festivals_rituals" element={<FestivalsAndRituals/>} />
      <Route path="/pages/english_pages/worship_system" element={<WorshipAndManagementSystem/>} />
      <Route path="/pages/english_pages/website_development" element={<WebsiteDevelopment/>} /> 
    </Routes>
   </Router>

    
    
  );
}

export default App;
