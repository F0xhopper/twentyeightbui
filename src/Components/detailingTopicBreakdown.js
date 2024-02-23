import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";
const DetailingTopicBreakdown = () => {
  const data = {
    labels: ["Avg.all", "Caution", "Complacent", "Confident"],
    datasets: [
      {
        label: "Adherence",
        backgroundColor: "#1A8DDD",
        data: [20, 10, 20, 1],
        barThickness: 20,
      },
      {
        label: "Combination therapy",
        backgroundColor: "#35DDB3",
        data: [20, 20, 5, 20],
        barThickness: 20,
      },
      {
        label: "Dosing",
        backgroundColor: "#DDDC61",
        data: [20, 20, 30, 39],
        barThickness: 20,
      },
      {
        label: "Guidlines",
        backgroundColor: "#DD6844 ",
        data: [20, 30, 10, 20],
        barThickness: 20,
      },
      {
        label: "Safety",
        backgroundColor: "#8F71DD",
        data: [30, 20, 35, 20],
        barThickness: 20,
      },
      {
        label: "Other",
        backgroundColor: "#DDDDDD",
        color: "white",
        data: [10, 20, 20, 20],
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    tooltips: {
      enabled: false,
      displayColors: true,
      callbacks: {
        mode: "x",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
        stacked: true,
      },
      y: {
        border: {
          display: false,
        },
        ticks: {
          color: "black",
          font: { size: 17, weight: 600, color: "black" },
          format: {
            style: "percent",
          },
        },
        grid: {
          display: false,
        },
        stacked: true,
      },
    },

    responsive: true,
  };

  return (
    <div>
      <h3>Detailing topic breakdown</h3>
      <Bar data={data} options={options} width={800} height={290} />
    </div>
  );
};

export default DetailingTopicBreakdown;
