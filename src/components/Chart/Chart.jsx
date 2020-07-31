import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, deaths, recovered }, country}) => {
    const [dailyData, setDailyData] = useState([]);//{} init //use hooks so need to import
//  above is equivalent to below
    // state = {
    //     dailydata : {}
    // }

    useEffect(() => {  //are sync fn, cannot use async so do it w a fn inside
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []); //empty array to prevent constant callback

    const lineChart = (
        dailyData.length !== 0
          ?(
                <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    //only have daily data for deaths and infected, not recovered
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'infected',
                        borderColor: '#3333ff',
                        fill: true,

                    },{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'infected',
                            borderColor: '#3333ff',
                            backgroundColor: 'rgba(255, 0, 0, 0.5',
                            fill: true,
                            
                        }],
                }}
                />) : null

    );


    const barChart = (
        confirmed
        ? (
            <Bar
                data= {{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5',
                            'rgba(255,0,0,0.5)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }]
                }}
                options= {{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${country}`}
                }}

            />
        ) : null



    )
    
    return(
        <div className={styles.container}>
            {/*if there is country, use bar chart, else line chart */}
            {country? barChart : lineChart}
        </div>
    )
}

export default Chart;