import convert from 'convert-units';
import { constWeather } from '../constans/weather';


const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = weather => {
    const { id } = weather;

    if(id < 300){
        return constWeather.THUNDER;
    } else if (id < 400){
        return constWeather.DRIZZLE;
    } else if (id < 600){
        return constWeather.RAIN;
    } else if (id < 700){
        return constWeather.SNOW;
    } else if (id === 800) {
        return constWeather.SUN;
    } else {
        return constWeather.CLOUD
    }
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;

}

export default transformWeather;