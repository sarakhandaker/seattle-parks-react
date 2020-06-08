import React, { Component } from 'react'

// 0:
// air_pressure: 1007.5
// applicable_date: "2020-06-06"
// created: "2020-06-06T18:40:36.293446Z"
// humidity: 69
// id: 6419562759192576
// max_temp: 16.095
// min_temp: 9.885
// predictability: 75
// the_temp: 15.620000000000001
// visibility: 9.054621013282429
// weather_state_abbr: "lr"
// weather_state_name: "Light Rain"
// wind_direction: 209.11682349605942
// wind_direction_compass: "SSW"
// wind_speed: 5.425869216975529

export class Weather extends Component {

    render() {
        let {weather}=this.props
        let symb="c"
        if (weather){
            weather=weather["consolidated_weather"]
            symb=weather[0]['weather_state_abbr']
        }
        
        return (
            <>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="panel panel-default weather-panel">
        <div className="panel-heading">Current Seattle Weather<br /><small id="currentTime" className="supersmall">{weather? weather[0]['applicable_date']: null}</small></div>
                        <div className="row">
                            <div className="col-sm-6 wi" id="currentIcon">{weather? <img src={`https://www.metaweather.com/static/img/weather/png/64/${symb}.png`} alt="weather"/>:null}</div>
                            <div className="col-sm-6 p-3" style={{ "padding": "0px" }}>
                                <h1 className="temp"><span id="currentTemperature"></span><span>{weather? Math.round(weather[0]['the_temp']): null}°</span></h1>
                                <span>{weather? weather[0]['weather_state_name']: null}</span> <br/>
                                <span>Wind: {weather? Math.round(weather[0]['wind_speed']): null}</span><span id="currentWind"></span><span> mph(s)</span><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
            </>
        )
    }
}

export default Weather