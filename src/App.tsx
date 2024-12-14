import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CampaignAutomation from "./pages/CampaignAutomation";
import PerformanceAnalytics from "./pages/AnalyticsDashboard";
//import Personalization from './components/Personalization';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/personalization" element={<Personalization />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/campaignautomation" element={<CampaignAutomation/>} />
        <Route path="/analytics" element={<PerformanceAnalytics/>} />
      </Routes>
    </Router>
  );
};

export default App;



