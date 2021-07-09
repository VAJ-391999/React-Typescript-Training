var loki = require('lokijs');

var db = new loki('db.json');

db.addCollection("weatherData");

db.saveDatabase();