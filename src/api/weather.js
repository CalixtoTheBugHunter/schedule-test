import axios from 'axios'

const KEY = 'fab26da6357e5f357c5bc87705fc3ca0'

export default {
    async getWeather(city) {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    }
}