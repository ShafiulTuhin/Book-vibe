import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useLoaderData } from "react-router";

// Register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BookChart = () => {
  const data = useLoaderData();
  // Prepare data
  const chartData = {
    labels: data.map((book) => book.bookName),
    datasets: [
      {
        label: "Total Pages",
        data: data.map((book) => book.totalPages),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-[400px] sm:h-[400px] xs:h-[300px]">
      <Bar
        data={chartData}
        options={{
          ...options,
          responsive: true,
          maintainAspectRatio: false, // let the chart fill parent div
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              ticks: {
                maxRotation: 45, // rotate labels if too long
                minRotation: 0,
                autoSkip: true, // skip some labels on small screens
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BookChart;
