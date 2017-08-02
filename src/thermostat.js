const DEFAULTTEMPERATURE = 20;

function Thermostat(temperature = DEFAULTTEMPERATURE) {
  this._temperature = temperature;
  this._minTemperature = 10
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function (number) {
  this._temperature += number;
};

Thermostat.prototype.down = function (number) {
  this._temperature -= number;
};

Thermostat.prototype.minTemperature = function () {
  return this._minTemperature;
};
