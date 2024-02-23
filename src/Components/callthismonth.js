import { Doughnut, Chart } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

const CallThisMonth = () => {
  const [doughnutData, setDoughnutData] = useState([17, 200]);
  const options = {
    cutout: 96,
    events: [],
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: ["Grey", "Orange"],
    datasets: [
      {
        data: doughnutData,
        backgroundColor: ["#DDDDDD", "#F68B15"],
        hoverBackgroundColor: ["orange", "grey"],
      },
    ],
  };
  function randomiseData() {
    let randomNum = Math.floor(Math.random() * (28 - 10 + 1) + 10);
    setDoughnutData([randomNum, 28 - randomNum]);
  }
  useEffect(() => {
    randomiseData();
  }, []);
  return (
    <div className="callsThisMonthContainer">
      <h3>Calls this month</h3>
      <div className="doughnutContainer" onClick={randomiseData}>
        <h2 className="firstNumberPie">{doughnutData[0]}</h2>
        <h2 className="dashPie">/</h2> <h2 className="secondNumberPie">28</h2>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default CallThisMonth;
