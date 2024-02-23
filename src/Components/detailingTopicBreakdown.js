import { Bar } from "react-chartjs-2";
import "chart.js/auto";
const DetailingTopicBreakdown = () => {
  const data = {
    labels: ["Avg.all", "Caution", "Complacent", "Confident"],
    datasets: [
      {
        label: "Adherence",
        backgroundColor: "#1A8DDD",
        data: [82, 82, 82, 82],
        barThickness: 20,
      },
      {
        label: "Combination therapy",
        backgroundColor: "#35DDB3",
        data: [82, 82, 82, 82],
        barThickness: 20,
      },
      {
        label: "Dosing",
        backgroundColor: "#DDDC61",
        data: [951, 951, 951, 951],
        barThickness: 20,
      },
      {
        label: "Guidlines",
        backgroundColor: "#DD6844 ",
        data: [951, 951, 951, 951],
        barThickness: 20,
      },
      {
        label: "Safety",
        backgroundColor: "#8F71DD",
        data: [951, 951, 951, 951],
        barThickness: 20,
      },
      {
        label: "Other",
        backgroundColor: "#00000040",
        data: [951, 951, 951, 951],
        barThickness: 20,
      },
    ],
  };

  const options = {
    tooltips: {
      displayColors: true,
      callbacks: {
        mode: "x",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    responsive: true,
  };

  return (
    <div>
      <h2>Stacked Bar Chart</h2>
      <Bar data={data} options={options} width={400} height={200} />
    </div>
  );
};

export default DetailingTopicBreakdown;
