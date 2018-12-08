
const location = "Toledo,es";

const api_key = "577f0e5a3cd19b81b02e3e4f27ecc3e0";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;