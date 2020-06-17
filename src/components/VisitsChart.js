//npm install chart.js --save
import Chart from 'chart.js';
import React, { PureComponent } from 'react'
import classes from "./Stats.css";
import moment from 'moment'

Chart.defaults.global.legend.display = false;

export default class Stats extends PureComponent {
    chartRef = React.createRef();

    makeChart() {
        let data = []
        const myChartRef = this.chartRef.current.getContext("2d");
        let mapData = {}
        let visits = this.props.visits
        for (let i = 0; i < visits.length; i++) {
            mapData[visits[i].date] ? mapData[visits[i].date] += 1 : mapData[visits[i].date] = 1
        }
        const keys = Object.keys(mapData)

        keys.map(key => data.push({ x: moment(key).add(1, "days"), y: mapData[key] }))

        new Chart(myChartRef, {
            type: "bar",
            data: {
                datasets: [{
                    backgroundColor: 'orange',
                    borderColor: '#A4C3B2',
                    fill: false,
                    data: data
                }]
            },
            options: {
                title: {
                    text: "Planned Future Visits by Users",
                    display: true,
                    fontColor: "black",
                    fontSize: 20
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of Users'
                        },
                        ticks: {
                            fontSize: 15,
                            min: 0,
                            max: 25,
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day',
                            displayFormats: { day: 'MMM D' }
                        },
                        ticks: {
                            fontSize: 18,
                            min: moment(),
                            max: moment().add(30, 'days')
                        }
                    }]
                }
            }
        })
    }

    componentDidMount() {
        this.makeChart()
    }
    componentDidUpdate() {
        this.makeChart()
    }
    render() {
        return (
            <div className="chart">
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        )
    }
}