require 'sinatra'
require 'json'

set :public_folder, proc { File.join(root) }

get '/time' do
  headers 'Access-Control-Allow-Origin' => '*'
  {time: Time.now.to_s}.to_json
end

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  thermostat = {current_temperature: 'temperature'  }.to_json
end


post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  p params
  temperature = params[:temperature]
  thermostat = {current_temperature: temperature }.to_json
end
