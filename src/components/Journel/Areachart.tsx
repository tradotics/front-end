import React from 'react'
import { Line } from 'react-chartjs-2'

import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Filler, Title } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title);
export default function Areachart() {
  const labels = ['10 June 2022', '12 June 2022', '26 June 2022', '7 July 2022', '11 July 2022', '14 July 2022', '16 July 2022']
  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 1',
        data: [50, 120, 315, 225, 440, 320, 380],
        backgroundColor: 'rgba(48,117,130,0.5)',
        borderWidth:0,
        pointRadius:0
    }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true, 
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          tickColor: '#FFF',
        },
        grid: {
          color: 'rgb(112,112,112,0.5)'
        }
      }
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-[90%] w-[95%]'>
      <Line data={data} options={options}></Line>
    </div>
  )
}
