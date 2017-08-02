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

  });
});
