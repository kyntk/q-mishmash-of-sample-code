require 'sinatra'
require "sinatra/reloader"
require 'slim'

get '/' do
  slim :index
end

get '/utf8' do
  slim :utf8
end

get '/shift-jis' do
  headers \
    "Content-Type" => 'text/html;charset=shift_jis'
  slim :shift_jis
end

get '/shift-jis-no-charset' do
  headers \
    "Content-Type" => 'text/html'
  slim :shift_jis_no_charset
end
