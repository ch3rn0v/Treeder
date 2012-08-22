class ReadingObserver < ActiveRecord::Observer
	#Проверка на возможные ачивки
	def after_save(reading)
		data = { speed: reading.speed, 
			     time: reading.time,
			     percantage: reading.percentage,
			     user: reading.user
			   }

	    validators = 
	    { persistent_reader: proc { true if data[:user].readings.length >= 0 },
	      fast_reader:       proc { true if data[:user].readings.find_all{|r| r.speed > 180}.length >= 10 }
	    }

	    Achievement.all.each do |ach| 
	    	if validators[ach.name.to_sym].call
	    	  AttainedAchievement.create({user_id: data[:user].id, achievement_id: ach.id })
	    	end
	    end
	end
end
