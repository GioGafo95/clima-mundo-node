const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }

    return {
        direccion: resp.data.results[0].formatted_address,
        latitud: resp.data.results[0].geometry.location.lat,
        longitud: resp.data.results[0].geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}