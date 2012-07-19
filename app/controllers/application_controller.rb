class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_i18n_locale_from_params
  
  protected
    def set_i18n_locale_from_params
      if params[:locale]
        if I18n.available_locales.include?(params[:locale].to_sym)
          I18n.locale = params[:locale]
        else
          flash.now[:notice] = "#{params[:locale]} translation not available"
          logger.error flash.now[:notice]
        end
      end
    end
    
    def default_url_options
      { :locale => I18n.locale }
    end


    def sec_to_date(seconds)
      seconds = seconds.to_i

         get_time = lambda do |op| 
         res =  seconds.send(op, 60).to_s
         '0' + res.to_s if res.length < 2
       end

      get_time.call('/') + ':' + get_time.call('%')
    end
end