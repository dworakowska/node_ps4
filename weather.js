let request = require("request");

let getWeather = (lat, lng, completion) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  console.log(url);
  request(url, (error, response, body) => {
    if (response.statusCode === 200) {
      let responseBody = JSON.parse(body);
      completion(responseBody);
    } else if (error) {
      console.log("Brak połączenia do serwera" + error);
    } else if (response.statusCode === 404) {
      console.log("User not found");
    }
  });
};

module.exports.getWeather = getWeather;
