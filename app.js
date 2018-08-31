const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.latitud, coords.longitud);

        return `El clima en ${coords.direccion} es de ${temp}º`;
    } catch (e) {
        console.log('No se pudo localizar el clima!');
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));