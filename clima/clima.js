const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8f9599c7c45e62679e1fc85d12b3d03e`);
    //console.log(resp);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}