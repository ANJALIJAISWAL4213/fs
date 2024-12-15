import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/PerformanceAnalytics.css";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const PerformanceAnalytics = () => {
  const data = {
    openRate: 85,
    clickThroughRate: 42,
    responseRate: 33,
    bounceRate: 15,
    unsubscribes: 5,
  };

  // Data for the bar chart
  const barData = {
    labels: ["Open Rate", "Click-Through Rate", "Response Rate", "Bounce Rate", "Unsubscribes"],
    datasets: [
      {
        label: "Percentage",
        data: [
          data.openRate,
          data.clickThroughRate,
          data.responseRate,
          data.bounceRate,
          data.unsubscribes,
        ],
        backgroundColor: [
          "#4caf50", // Green
          "#2196f3", // Blue
          "#ff9800", // Orange
          "#f44336", // Red
          "#9c27b0", // Purple
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: ["Open Rate", "Click-Through Rate", "Response Rate", "Bounce Rate", "Unsubscribes"],
    datasets: [
      {
        data: [
          data.openRate,
          data.clickThroughRate,
          data.responseRate,
          data.bounceRate,
          data.unsubscribes,
        ],
        backgroundColor: [
          "#4caf50",
          "#2196f3",
          "#ff9800",
          "#f44336",
          "#9c27b0",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h1>Performance Analytics</h1>
      <div className="chart-container">
        <div className="chart-card"style={{ width: "300px", height: "450px" }}>
          <h2>Bar Chart</h2>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-card"style={{ width: "300px", height: "450px" }}>
          <h2>Pie Chart</h2>
          <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false}} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
