import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChart = ({ labels, datasets, title, setLegend, setDataLabel }) => {
  let sortedData = null;

  if (title === "장애유형") {
    const filteredData = labels.reduce((acc, curr, idx) => {
      if (datasets[idx] !== 0) {
        acc[curr] = datasets[idx];
      }
      return acc;
    }, {});

    sortedData = Object.fromEntries(
      Object.entries(filteredData).sort(([, a], [, b]) => (a > b ? -1 : 1))
    );
  }

  const data = {
    labels: sortedData ? Object.keys(sortedData)?.slice(0, 10) : labels,
    text: "24",
    datasets: [
      {
        data: sortedData ? Object.values(sortedData)?.slice(0, 10) : datasets,
        backgroundColor: [
          "rgba(213, 29, 30, 0.6)",
          "rgba(233, 80, 21, 0.6)",
          "rgba(245, 169, 26, 0.6)",
          "rgba(203, 175, 27, 0.6)",
          "rgba(146, 170, 30, 0.6)",
          "rgba(72, 149, 42, 0.6)",
          "rgba(33, 163, 117, 0.6)",
          "rgba(28, 147, 185, 0.6)",
          "rgba(63, 103, 171, 0.6)",
          "rgba(100, 92, 179, 0.6)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 4,
        left: 20,
        right: 20,
        bottom: 0,
      },
    },
    plugins: {
      title: {
        display: true,
        align: "start",
        text: title,
        font: { size: 19 },
      },
      legend: {
        display: setLegend,
        position: "bottom",
        align: "center",
        labels: { font: { size: 8 }, boxWidth: 10 },
        maxWidth: 70,
      },
      tooltip: {
        titleFont: { size: 12 },
        bodyFont: { size: 14 },
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        boxPadding: 20,
        callbacks: {
          label: function (context) {
            const value = context.formattedValue || "";
            return `${value}명`;
          },
        },
      },
      datalabels: {
        color: "rgba(32, 32, 32, 1)",
        formatter: (value) => {
          return value + "명";
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Pie data={data} options={options} plugins={setDataLabel && [ChartDataLabels]} />;
};

export default PieChart;
