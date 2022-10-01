import React, { Fragment } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Title } from 'chart.js'
import Labels from './Labels';

Chart.register(ArcElement, Title);
export default function Doughnutchart() {
    // let percentage = Math.round((props.data.wins / (props.data.wins + props.data.losses)) * 100) + '%';
    // let percentage = '10%';
    const chartData = {
        labels: ['Wins', 'Losses'],
        datasets: [
            {
                data: [10, 30],
                backgroundColor: [
                    '#53C0A3', '#ED767A'
                ],
                borderWidth: 0,
                spacing: 2, //spacing in the doughnut chart
                cutout: '85%',
                radius:'90%'
                //thickness of the doughnut chart

            },
        ],
    }
    return (
        <Fragment>
            <div className=' relative flex flex-row
            h-[100%] w-[60%]'>
            <Doughnut data={chartData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Custom Chart Title',
                        color: '#BDBDBD',
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                        padding: 10,
                    }
                },
                
                
            }} />

            <Labels />
            <div className='absolute top-[50%] left-[40%]'><span className='text-success2 text-2xl font-bold'>50%</span></div>
            </div>
        </Fragment>
    )   
}
