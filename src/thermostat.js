const DEFAULTTEMPERATURE = 20;

function Thermostat(temperature = DEFAULTTEMPERATURE) {
  this._temperature = temperature;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function (number) {
  this._temperature += number;
};
