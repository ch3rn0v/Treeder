class ReadingController < ApplicationController
  def new
  	@text = Text.find(params[:id])
  end

  def save
  	reading = Reading.new(params.except(:locale, :controller, :action))
  	if reading.save
  	  redirect_to reading
  	end  	
  end

  def show
  	@reading = Reading.find(params[:id])
  end

  def my_readings
  	@reading = current_user.readings
  end
end
