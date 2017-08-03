$(document).ready(function(){
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature());

  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
  });

  $('#temperature-down').on('click',function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature());
  });

  $('#powersaving-on').on('click', function(){
    thermostat.powerSavingModeOn()
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').on('click', function(){
    thermostat.powerSavingModeOff()
    $('#power-saving-status').text('off');
  });

  function updateTemperature() {
    $('#temperature').attr('class', thermostat.getEnergyUsage());
  }

});
