const lokijs = require('lokijs');

var db = new lokijs('db.json');

module.exports = db;