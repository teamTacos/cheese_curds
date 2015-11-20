require 'sinatra/base'
require 'haml'

class CheeseCurds < Sinatra::Base

  configure do
    set :haml, format: :html5
  end

  get('/') { haml :chohan }
end
