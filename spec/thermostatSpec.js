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
      thermostat.up(1);
      expect(thermostat.temperature()).toEqual(21);
    });
  });

describe('decreasing temperature', function() {
    it('can decrease with down function', function() {
      thermostat.down(2);
      expect(thermostat.temperature()).toEqual(18);
    });
  });

describe('minimum temperature', function() {
  it('is set to 10 degrees', function() {
    expect(thermostat.minTemperature()).toEqual(10);
    });
  });

  it('does not allow temp to be lowered beyond minimum', function () {
    thermostat.down(10);
    expect(thermostat.down(1)).toThrowError('Minimum Temperature is 10 Degrees')
  });
});
