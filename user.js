let request = require("request");

let getUser = (id, onResponse) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;

  request(url, (error, response, body) => {
    if (response.statusCode === 200) {
      let responseBody = JSON.parse(body);

      let name = responseBody.name;
      let lat = responseBody.address.geo.lat;
      let lng = responseBody.address.geo.lng;
      onResponse(lat, lng, name);
    } else if (error) {
      console.log("Brak połączenia do serwera" + error);
    } else if (response.statusCode === 404) {
      console.log("User not found");
    }
  });
};

module.exports.getUser = getUser;
