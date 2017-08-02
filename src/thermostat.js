const DEFAULTTEMPERATURE = 20;

function Thermostat(temperature = DEFAULTTEMPERATURE) {
  this._temperature = temperature;
  this._minTemperature = 10
  this._maxTemperature = 25
  this._powerSavingMode = true
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  this._temperature += 1;
};

Thermostat.prototype.down = function () {
  if(this.isMinTemperature()) {
    return;
  }
  this._temperature -= 1;
};

Thermostat.prototype.minTemperature = function () {
  return this._minTemperature;
};

Thermostat.prototype.isMinTemperature = function () {
  return this.temperature === this._minTemperature;
};

Thermostat.prototype.getPowerSavingMode = function () {
  return this._powerSavingMode
};

Thermostat.prototype.powerSavingModeOn = function () {
  this._powerSavingMode = true;
  this._maxTemperature = 25
};

Thermostat.prototype.maxTemperature = function () {
  return this._maxTemperature;
};

Thermostat.prototype.powerSavingModeOff = function () {
  this._powerSavingMode = false;
  this._maxTemperature = 32
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = 20;
};
