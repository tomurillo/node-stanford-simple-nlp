var CoffeeScript = require('coffeescript');

if (CoffeeScript.register) {
  CoffeeScript.register();
}

module.exports = require('./lib/index');
