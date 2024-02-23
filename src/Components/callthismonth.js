import { Doughnut, Chart } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";
Chart.plugins.register("DoughnutLabel");
const CallThisMonth = () => {
  const [doughnutData, setDoughnutData] = useState([300, 200]);
  const options = {
    cutout: 130,

    plugins: {
      legend: {
        display: false,
      },
    },
    doughnutlabel: {
      text: "Center Text",
      color: "#000000", // Text color
      fontStyle: "Arial", // Font style
      sidePadding: 20, // Spacing from the sides
    },
  };
  const data = {
    labels: ["Grey", "Orange"],
    datasets: [
      {
        data: doughnutData,
        backgroundColor: ["lightgrey", "orange"],
        hoverBackgroundColor: ["orange", "grey"],
      },
    ],
  };
  function randomiseData() {
    setDoughnutData([
      Math.floor(Math.random() * (0 - 200 + 1)),
      Math.floor(Math.random() * (0 - 200 + 1)),
    ]);
  }
  return (
    <div className="callsThisMonthContainer">
      <h3>Calls this month</h3>
      <Doughnut data={data} options={options} onClick={randomiseData} />
    </div>
  );
};

export default CallThisMonth;
