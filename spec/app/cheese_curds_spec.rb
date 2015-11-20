require 'spec_helper'


describe CheeseCurds do
  before(:all) { get('/') }

  it { expect(last_response).to be_ok }

end