import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, BarController, BarElement, CategoryScale, Tooltip, LinearScale } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, Tooltip, LinearScale)
export default function Barchart() {
    const labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat','Tues', 'Wed', 'Thu', 'Fri', 'Sat']
    const chartData = {
        labels: labels,
        datasets: [
            { //blue
                barPercentage: 0.5,
                data: [120, 180, 320, 50, 280, 80, 80, 50, 280, 80, 80],
                barThickness:20,
                backgroundColor: '#237F7D',

            },
            {
                //red
                barPercentage: 0.5,
                barThickness:20,
                data: [30, 120, 60, 180, 40, 180, 50, 50, 280, 80, 80],
                backgroundColor: '#821D60',
            }
        ]
    };
    return (
            <div className='flex flex-col items-center justify-center h-[90%] w-[95%]'>
                <Bar data={chartData} options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        x: {
                            display: true,
                            ticks: {
                                stepSize: 100, //steps in the graph
                            },
                            grid: {
                                color: 'rgb(112,112,112,0.5)'
                            }
                        }
                    }   
                }} />
            </div>
    )
}