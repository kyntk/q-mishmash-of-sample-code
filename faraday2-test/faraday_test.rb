require 'faraday'
require 'faraday/net_http'

Faraday.default_adapter = :net_http
conn = Faraday.new(url: 'http://localhost:4567') do |f|
  f.response(:logger)
end

puts '[DEBUG] request /utf8'
response = conn.get('/utf8')
puts "[DEBUG] response.body.encoding, #{response.body.encoding}"
puts '[DEBUG] response.body', response.body.encode('UTF-8'), "\n"

puts '[DEBUG] request /shift-jis'
response = conn.get('/shift-jis')
puts "[DEBUG] response.body.encoding, #{response.body.encoding}"
puts '[DEBUG] response.body', response.body.encode('UTF-8'), "\n"

puts '[DEBUG] request /shift-jis-no-charset'
response = conn.get('/shift-jis-no-charset')
puts "[DEBUG] response.body.encoding, #{response.body.encoding}"
puts '[DEBUG] response.body', response.body.encode('UTF-8')