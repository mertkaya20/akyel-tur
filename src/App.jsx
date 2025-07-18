import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Standards from "./components/Standards";
import VehicleFleet from "./components/VehicleFleet";
import AboutUs from "./pages/AboutUs";
import VehicleFleetPage from "./pages/VehicleFleetPage";
import ContactPage from "./pages/ContactPage";
import StudentTransportation from "./pages/StudentTransportation";
import VIPService from "./pages/VIPService";
import WhatsappBot from "./components/WhatsappBot";
import PersonnelTransport from "./pages/PersonnelTransportation";
import GroupTours from "./pages/GroupTours";
import StudyServices from "./pages/StudyServices";
import WomenDriverTours from "./pages/WomenDriverTours";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Standards />
    <VehicleFleet />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/arac-filomuz" element={<VehicleFleetPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route
          path="hizmetler/ogrenci-tasimaciligi"
          element={<StudentTransportation />}
        />
        <Route path="hizmetler/vip-servis" element={<VIPService />} />
        <Route
          path="hizmetler/personel-tasimaciligi"
          element={<PersonnelTransport />}
        />
        <Route path="hizmetler/grup-gezi-turlari" element={<GroupTours />} />
        <Route path="/hizmetler/etut-servisleri" element={<StudyServices />} />
        <Route
          path="/hizmetler/kadin-soforlu-gezi-turlari"
          element={<WomenDriverTours />}
        />
      </Routes>
      <Footer />
      <WhatsappBot />
    </Router>
  );
};

export default App;
