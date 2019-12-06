// const fs = require('fs');
// const args = require('yargs').argv;

// const user = {
//     name: 'Jan',
//     lastName: 'Nowak'
// };

// let name = args.name;
// let lastName = args.lastName;

// user.name = name;
// user.lastName = lastName;

// fs.readFile('user.json', 'utf-8', (error, data) => {
//     let name = JSON.parse(data);
//     console.log(name.name)

//     const userText = JSON.stringify(user);

//     fs.writeFile('user.json', userText, () => {
//         console.log('Zapisano do pliku');
//     });
// });

// fs.writeFile('user.json', userText, () => {
//     console.log('Zapisano do pliku');
// })

const request = require("request");
const user = require("./user.js");
const weather = require("./weather.js");
const args = require("yargs").argv;
const fs = require("fs");

let ID = args.id;

user.getUser(ID, (lat, lng, name) => {
  weather.getWeather(lat, lng, response => {
    console.log(response);
    let temp = response.main.temp;
    let data = `Imie: ${name}, temperatura: ${temp}`;
    fs.writeFileSync("output.json", data);
  });
});
