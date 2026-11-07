import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Home from "@/pages/home";
import Rolunk from "@/pages/rolunk";
import Kapcsolat from "@/pages/kapcsolat";
import Galeria from "@/pages/galeria";
import Gyik from "@/pages/gyakori-kerdesek";
import Adatvedelem from "@/pages/adatvedelem";
import Confirmation from "@/pages/confirmation";
import ErrorPage from "@/pages/error";
import Termekek from "@/pages/termekek";
import Hasznalt from "@/pages/hasznalt-lepcsoliftek";
import UjLepcsoliftek from "@/pages/uj-lepcsoliftek";
import Alpha from "@/pages/uj-lepcsoliftek/alpha";
import Delta from "@/pages/uj-lepcsoliftek/delta";
import Essential from "@/pages/uj-lepcsoliftek/essential";
import Omega from "@/pages/uj-lepcsoliftek/omega";
import Public from "@/pages/uj-lepcsoliftek/public";
import Sa from "@/pages/uj-lepcsoliftek/sa";
import Stairmax from "@/pages/uj-lepcsoliftek/stairmax";
import Stratos from "@/pages/uj-lepcsoliftek/stratos";
import Platformliftek from "@/pages/platformliftek";
import Alpin from "@/pages/platformliftek/alpin";
import Delphin from "@/pages/platformliftek/delphin";
import Elevex from "@/pages/platformliftek/elevex";
import Liftboy123 from "@/pages/platformliftek/liftboy1-2-3";
import Liftboy4 from "@/pages/platformliftek/liftboy4";
import Liftboy5 from "@/pages/platformliftek/liftboy5";
import Sigma from "@/pages/platformliftek/sigma";
import Stepsaver from "@/pages/platformliftek/stepsaver";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/kapcsolat" element={<Kapcsolat />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/gyakori-kerdesek" element={<Gyik />} />
        <Route path="/adatvedelem" element={<Adatvedelem />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/termekek" element={<Termekek />} />
        <Route path="/hasznalt-lepcsoliftek" element={<Hasznalt />} />
        <Route path="/uj-lepcsoliftek" element={<UjLepcsoliftek />} />
        <Route path="/uj-lepcsoliftek/alpha" element={<Alpha />} />
        <Route path="/uj-lepcsoliftek/delta" element={<Delta />} />
        <Route path="/uj-lepcsoliftek/essential" element={<Essential />} />
        <Route path="/uj-lepcsoliftek/omega" element={<Omega />} />
        <Route path="/uj-lepcsoliftek/public" element={<Public />} />
        <Route path="/uj-lepcsoliftek/sa" element={<Sa />} />
        <Route path="/uj-lepcsoliftek/stairmax" element={<Stairmax />} />
        <Route path="/uj-lepcsoliftek/stratos" element={<Stratos />} />
        <Route path="/platformliftek" element={<Platformliftek />} />
        <Route path="/platformliftek/alpin" element={<Alpin />} />
        <Route path="/platformliftek/delphin" element={<Delphin />} />
        <Route path="/platformliftek/elevex" element={<Elevex />} />
        <Route path="/platformliftek/liftboy1-2-3" element={<Liftboy123 />} />
        <Route path="/platformliftek/liftboy4" element={<Liftboy4 />} />
        <Route path="/platformliftek/liftboy5" element={<Liftboy5 />} />
        <Route path="/platformliftek/sigma" element={<Sigma />} />
        <Route path="/platformliftek/stepsaver" element={<Stepsaver />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}
