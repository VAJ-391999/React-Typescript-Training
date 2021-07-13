const loki = require('lokijs');

var db = new loki('db.json');

db.addCollection("ServiceData")

module.exports = db;

