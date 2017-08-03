require 'sinatra'
require_relative 'models/thermostat.rb'
require_relative 'models/city.rb'
require 'json'

set :public_folder, proc { File.join(root) }

before do
  content_type 'application/json'
end

get '/time' do
  headers 'Access-Control-Allow-Origin' => '*'
  {time: Time.now.to_s}.to_json
end

post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  @thermostat = Thermostat.create(params[:current_temperature], City.new)
end

before do
  @thermostat = Thermostat.instance
end

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  {:current_temperature => @thermostat.current_temperature }.to_json
end

post '/city' do
  headers 'Access-Control-Allow-Origin' => '*'
  @thermostat.current_city.name = params[:current_city]
  {:current_city => @thermostat.current_city.name }.to_json
end

get '/thermostat' do
  headers 'Access-Control-Allow-Origin' => '*'
  {:current_temperature => @thermostat.current_temperature, :current_city => @thermostat.current_city.name }.to_json
end
