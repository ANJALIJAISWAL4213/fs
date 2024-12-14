import React from "react";
import "../styles/PerformanceAnalytics.css";

const PerformanceAnalytics = () => {
  const data = {
    openRate: 85,
    clickThroughRate: 42,
    responseRate: 33,
    bounceRate: 15,
    unsubscribes: 5,
  };

  return (
    <div className="analytics-container">
      <h1>Performance Analytics</h1>
      <div className="analytics-card">
        <h2>Open Rate</h2>
        <p>{data.openRate}%</p>
      </div>
      <div className="analytics-card">
        <h2>Click-Through Rate</h2>
        <p>{data.clickThroughRate}%</p>
      </div>
      <div className="analytics-card">
        <h2>Response Rate</h2>
        <p>{data.responseRate}%</p>
      </div>
      <div className="analytics-card">
        <h2>Bounce Rate</h2>
        <p>{data.bounceRate}%</p>
      </div>
      <div className="analytics-card">
        <h2>Unsubscribes</h2>
        <p>{data.unsubscribes}%</p>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
