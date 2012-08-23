class ReadingController < ApplicationController
  before_filter {|c| }
  def new
  	@text = Text.find(params[:id])
  end

  def save
    params[:time] = sec_to_date(params[:time])
  	@reading = Reading.new(params.except(:locale, :controller, :action))
  	if @reading.save
  	  redirect_to :action => 'my_readings'
  	end  	
  end

  def show
  	@reading = Reading.find(params[:id])
  end

  def my_readings
  	  @reading = current_user.readings if current_user
  end
end
