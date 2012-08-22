class Achievement < ActiveRecord::Base
	has_many :attained_achievements
	has_many :users, :through => :attained_achievements
end
