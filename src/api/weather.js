import axios from 'axios'

const KEY = process.env.VUE_APP_OPEN_WEATHER_KEY

export default {
    async getWeather(city) {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    }
}