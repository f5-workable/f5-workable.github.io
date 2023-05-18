import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import autocolors from "chartjs-plugin-autocolors";
import { color } from "chart.js/helpers";

const PieChart = ({
  labels,
  datasets,
  title,
  setLegend,
  setDataLabel,
  backgroundColor,
  borderColor,
}) => {
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
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 10,
        left: 20,
        right: 20,
        bottom: 10,
      },
    },
    plugins: {
      title: {
        display: true,
        align: "start",
        text: title,
        font: { size: 19 },
        padding: {
          bottom: 20,
        },
      },
      legend: {
        display: setLegend,
        position: "bottom",
        align: "end",
        labels: { padding: 10, font: { size: 14 } },
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
      autocolors: {
        mode: "data",
        customize(context) {
          const colors = context.colors;
          const lighten = (pickedColor, value) => color(pickedColor).alpha(value).rgbString();
          return {
            background: lighten(colors.background, 0.5),
            border: lighten(colors.border, 0.5),
          };
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <Pie
      data={data}
      options={options}
      plugins={(setDataLabel && [ChartDataLabels], autocolors)}
    />
  );
};

export default PieChart;
