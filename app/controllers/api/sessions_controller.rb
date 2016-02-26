class Api::SessionsController < ApplicationController

  def delete
    sign_out
    redirect_to home_url
  end

end