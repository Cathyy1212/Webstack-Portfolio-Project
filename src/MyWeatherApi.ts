
const API_KEY = "3e738ddeb7ff41e3977110900252001";
const getUrlApi = (city: string) => `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;

const MyWeatherApi = {

    getWeather: async (city: string) => {
        return fetch(getUrlApi(city))
            .then(res => res.json())
            .then(data => data?.forecast?.forecastday)
            .catch(error => console.log('Error fetching weather Data : ', error));
        
        }
}

export default MyWeatherApi;