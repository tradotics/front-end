import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, BarController, BarElement, CategoryScale, Tooltip, LinearScale } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, Tooltip, LinearScale)
export default function Barchart() {
    const labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat','Tues', 'Wed', 'Thu', 'Fri', 'Sat','Wed', 'Thu', 'Fri']
    const chartData = {
        labels: labels,
        datasets: [
          { //blue
            barPercentage: 0.8,
            data: [50, 20, 20, 10,0,60,60,50,75,0,25,20,60,20,0],
            backgroundColor: 'rgb(65,127,125,0.9)',
            stack:'stack 1'
          },
          { //blue
            barPercentage: 0.8,
            data: [0, -24, 0, 0,-32,-10,-50,-20,-60,10,-25,-50,0,-30,-45],
            backgroundColor: 'rgb(139,29,96,0.9)',
            stack:'stack 1'
          },
        ]

    };
    return (
            <div className='flex flex-col items-center justify-center h-[100%] w-[100%]'>
                <Bar data={chartData} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            display: true,
                            ticks: {
                                stepSize: 100, //steps in the graph
                            },
                        }
                    }   
                }} />
            </div>
    )
}