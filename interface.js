$(document).ready(function(){
  var thermostat = new Thermostat();

  $('#temperature').text(getThermostatTemperature());

  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
    storeThermostatTemperature();
  });

  $('#temperature-down').on('click',function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
    storeThermostatTemperature();
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

  $('#current-city').change(function(){
    event.preventDefault();
    var city = $('#current-city').val();
    displayweathercity(city);
  });

  function displayweathercity(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city ;
    var token = '&appid=daf41bb7aaab3c1e708dd343d71919fc';
    var units = '&units=metric';
    $.get(url + token + units,function(data){
      $('#current-temperature').text(data.main.temp);
    });
    storeCityData(city);
  };

  function storeThermostatTemperature() {
    $.post("http://localhost:4567/temperature", { current_temperature: thermostat.temperature()});
  }

  function getThermostatTemperature() {
    $.get("http://localhost:4567/temperature", function(resp){
      $('#temperature').text(resp.current_temperature);
    });
  }

  function storeCityData(city) {
    $.post("http://localhost:4567/city", { current_city: city });
  }
});
