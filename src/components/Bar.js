import PropTypes from "prop-types";
import {Line} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  plugins
} from "chart.js";


// Registro dos modulos necessarios do Chart.js
// Isso é obrigatório na versão deste lib
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  plugins
);

const AXIS_COLOR = "#ffffff";
const GRID_COLOR = "rgba(255, 255, 255, 0.2)";
const LINE_COLOR = "#3f51b5";
const FILL_COLOR = "rgba(63, 81, 181, 0.3)";

const createAxis = (title) => ({
  title: {
    display: true,
    text: title,
    color: AXIS_COLOR
  },
  ticks: {
    color: AXIS_COLOR
  },
  grid: {
    color: GRID_COLOR
  }
});

function Bar({labelData = [], imcData = []}) {

  // Dados exibidos no gráfico, labels = eixo X e datasets = serie de dados
  const data = {
    labels: labelData,
    datasets: [{
      label: "IMC",
      data: imcData,
      borderColor: LINE_COLOR,
      BackgroundColor: FILL_COLOR,
      tension: 0.3, // suavizar a linha
      pointRadius: 5 // tamanho dos pontos
    }]
  }

  return <Line data={data} options={options} />;
}

// Garante que os dados rcebidos sejam arrays
Bar.propType = {
  labelData: PropTypes.array,
  imcData: PropTypes.array
}

// Responsividade, legenda e eixos
const options = {
  responsive: true,
  plugins: {
    legend: {labels: {color: AXIS_COLOR}}
  },
  scales: {
    x: createAxis("Data"),
    y: {...createAxis("IMC"), beginAtZero: true}
  }
}

export default Bar;
