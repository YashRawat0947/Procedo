import React from "react";
import NavbarDark from "./components/NavbarDark";
import FooterDark from "./components/FooterDark";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeDark from "./Pages/Home";
import CareerDark from "./Pages/Career";
import MissionDark from "./Pages/Mission";
import OverviewDark from "./Pages/Overview";

const AppDark = () => {
  return (
    <BrowserRouter>
      <NavbarDark />

      <Routes>
        <Route path="/" element={<HomeDark />} />
        <Route path="/career" element={<CareerDark />} />
        <Route path="/mission" element={<MissionDark />} />
        <Route path="/company/overview" element={<OverviewDark />} />
      </Routes>

      <FooterDark />
    </BrowserRouter>
  );
};

export default AppDark;
