const axios = require('axios');

const getClima = async(lat,lng) => {
	let encodedLat = encodeURI(lat);
	let encodedLng = encodeURI(lng);

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodedLat}&lon=${encodedLng}&units=metric&appid=27138b685a8596df231f3f10d623e287`)
	return resp.data.main.temp;
}

module.exports = {
	getClima
}