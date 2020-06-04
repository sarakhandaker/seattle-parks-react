import React, { Component } from 'react'

// for Seattle WA
const WOEID='2490383'

export class Weather extends Component {
    state={
        weather:{}
    }
    componentDidMount(){
        fetch('https://www.metaweather.com/'+WOEID)
        .then(r=>r.json())
        .then(r=>this.setState({weather: r}))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Weather
