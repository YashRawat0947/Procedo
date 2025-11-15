import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarBright from "./components/NavbarBright";
import FooterBright from "./components/FooterBright";
import HomeBright from "./Pages/Home";
import CareerBright from "./Pages/Career";
import MissionBright from "./Pages/Mission";
import OverviewBright from "./Pages/Overview";

export default function AppBright() {
  return (
    <BrowserRouter>
      <NavbarBright />
      <main>
        <Routes>
          <Route path="/" element={<HomeBright />} />
          <Route path="/career" element={<CareerBright />} />
          <Route path="/mission" element={<MissionBright />} />
          <Route path="/company/overview" element={<OverviewBright />} />
          {/* add other routes */}
        </Routes>
      </main>
      <FooterBright />
    </BrowserRouter>
  );
}
