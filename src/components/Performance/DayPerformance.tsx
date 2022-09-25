import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, BarController, BarElement, CategoryScale, Tooltip} from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, Tooltip )
export default function DayPerformance() {
  const labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
  
  const chartData = {
    labels: labels,
    datasets: [
      { //blue
        barPercentage: 0.5,
        barThickness: 25,
        data: [120, 0, 320, 100,0,0,180],
        backgroundColor: 'rgb(6,135,125,0.9)',
        stack:'stack 1'
      },
      { //blue
        barPercentage: 0.5,
        barThickness: 25,
        data: [0, -240, 0, 0,-320,-100,0],
        backgroundColor: 'rgb(200,56,100,0.9)',
        stack:'stack 1'
      },
    ]
  };
  
  return (
    <div className='bg-background rounded-lg p-3 pl-2 w-84 h-72'>
      <div className='w-[95%] h-[90%]'>
        <span className='text-primary font-medium'>Performance by Day</span>
        <Bar data={chartData} options={{
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: {
              display: true,
              stacked: true,
              grid: {
                color: 'rgb(112,112,112,0.5)'
              }
            }
          }
        }} />
      </div>
    </div>
  )
}