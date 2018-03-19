import React from 'react';



class Weather extends React.Component{
  
    GetWeather()
    {
        if( this.props.weatherData.weather===undefined)
        {
            return <p>No weather data</p>
        }
        
        return <div>
                    <div>{this.props.weatherData.name}</div>
                    <div>{this.props.weatherData.weather[0].description}</div>
                    <div>Sunrise: {this.props.weatherData.sys.sunRiseToDisplay}</div>
                    <div>Sunset: {this.props.weatherData.sys.sunsetToDisplay}</div>
                </div>

    }

    render()
    {

        return (
                <div>
                    {this.GetWeather()}
                </div>
        )
    }

}

export default Weather