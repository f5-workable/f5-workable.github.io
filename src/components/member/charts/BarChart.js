import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChart = ({ labels, datasets, title }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y",
        backgroundColor: "#3490dc",
        hoverBackgroundColor: "#1d4f79",
        data: datasets,
        barThickness: 5,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    layout: {
      padding: {
        top: 10,
        left: 20,
        right: 40,
        bottom: 30,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          font: {
            size: 13,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        align: "start",
        text: title,
        font: { size: 19 },
        padding: {
          top:5,
          bottom: 25,
        },
      },
      legend: { display: false },
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
        display: true,
        anchor: "end",
        align: "end",
        offset: 5,
        font: { size: 13 },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
};

export default BarChart;
