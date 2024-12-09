import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
   const lang = useSelector((state) => state.lang.value);
   return (
      <>
         <div className="pt-[4] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <div dir={lang === "en" ? "ltr" : "rtl"}>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/benefits" element={<Benefits />} />
                  <Route path="/collaboration" element={<Collaboration />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/roadmap" element={<Roadmap />} />
               </Routes>
               <Footer />
            </div>
         </div>
         <ButtonGradient />
      </>
   );
}
