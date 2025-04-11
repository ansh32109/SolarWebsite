import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales } from 'chart.js';

// Register stuff (Chart.js v3+ needs this)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {

  const dataVal = [];

  for (let i = 0; i < 8640; i++) {
      dataVal.push(Math.random());
  }
  
  console.log(dataVal);


  const data = {
    labels: dataVal.map((_, idx)=>idx),
    datasets: [
      {
        label: 'Energy generated',
        data: dataVal,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4, // smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Second-wise energy data',
      },
      scales: {
        y: {
            min: 0,
            max: 2,
            suggestedMax: 2,
            ticks: {
                stepSize: 0.5,
            }
        },
        x: {
            display: false,
        }
      }
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
