describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('default temperature', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('increasing temperature', function() {
    it('can increase with Up function', function() {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });
  });

  describe('decreasing temperature', function() {
    it('can decrease with down function', function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });
  });

  describe('minimum temperature', function() {
    it('is set to 10 degrees', function() {
      expect(thermostat.minTemperature()).toEqual(10);
      });

    it('does not allow temp to be lowered beyond minimum', function () {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    });

  describe('power saving mode', function() {
    it('power saving mode is on by default', function () {
      expect(thermostat.getPowerSavingMode()).toEqual(true);
      });

    it('when it is on, max temp set at 25 degrees', function () {
      expect(thermostat.maxTemperature()).toEqual(25);
      });

    it('when it is off, max temp set at 32 degrees', function () {
      thermostat.powerSavingModeOff();
      expect(thermostat.maxTemperature()).toEqual(32);
    });
  });
});
  describe('resetting the temperature', function() {
    it('resets the temperature to 20', function (){
      thermostat.resetTemperature();
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULTTEMPERATURE);
    });
  });

  describe('energy usage', function() {
    it('checks current energy usage in default mode', function (){
      expect(thermostat.getEnergyUsage()).toEqual('medium-usage');
    });

    it('returns high energy usage when temp > 25', function (){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getEnergyUsage()).toEqual('high-usage');
    });

    it('returns low energy usage when temp < 18', function (){
        for (var i = 0; i < 4; i++) {
        thermostat.down();
      }
      expect(thermostat.getEnergyUsage()).toEqual('low-usage');
    });
  });

});
