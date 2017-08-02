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
  
});
