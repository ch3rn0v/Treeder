class HomeController < ApplicationController
  def index
    if params[:set_locale]
      redirect_to home_path(:locale => params[:set_locale])
    end
  end
end