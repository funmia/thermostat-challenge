class Thermostat
  attr_reader :current_temperature, :current_city

  def initialize(current_temperature, city)
    @current_temperature = current_temperature
    @current_city = city
  end

  def self.create(current_temperature, city)
    @thermostat = Thermostat.new(current_temperature, city)
  end

  def self.instance
    @thermostat
  end

end
