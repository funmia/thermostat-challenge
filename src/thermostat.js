const DEFAULTTEMPERATURE = 20;

function Thermostat(temperature = DEFAULTTEMPERATURE) {
  this._temperature = temperature;
  this._minTemperature = 10
  this._maxTemperature = 25
  this._powerSavingMode = true
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.MAX_LIMIT_PSM_ON = 25;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaxTemperature()) {
    return;
  }
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

Thermostat.prototype.isMaxTemperature = function () {
  return this.temperature === this._maxTemperature;
};

Thermostat.prototype.powerSavingModeOff = function () {
  this._powerSavingMode = false;
  this._maxTemperature = 32
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = this.DEFAULTTEMPERATURE;
};

Thermostat.prototype.getEnergyUsage = function () {
  if (this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  else if (this._temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._temperature <= this.MAX_LIMIT_PSM_ON ) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  }
};
