import React from 'react'

export function Weather({ weather }) {

    let symb = "c"
    if (weather) {
        weather = weather["consolidated_weather"]
        symb = weather[0]['weather_state_abbr']
    }

    return (
        <>
                <div className="panel panel-default weather-panel">
               {symb==="c" || symb=== "lc"? <div className="alert alert-danger" role="alert"><h2>It's nice out, parks may be busier than usual!</h2></div>: null}
                    <div className="panel-heading">Current Seattle Weather<br /><small className="supersmall">{weather ? weather[0]['applicable_date'] : null}</small></div>
                    <div className="row">
                        <div className="col-sm-6 wi">{weather ? <img src={`https://www.metaweather.com/static/img/weather/png/64/${symb}.png`} alt="weather" /> : null}</div>
                        <div className="col-sm-6 p-3" style={{ "padding": "0px" }}>
                            <h1 className="temp"><span></span><span>{weather ? Math.round(weather[0]['the_temp']) : null}°</span></h1>
                            <span>{weather ? weather[0]['weather_state_name'] : null}</span> <br />
                            <span>Wind: {weather ? Math.round(weather[0]['wind_speed']) : null}</span><span></span><span> mph(s)</span><br />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Weather