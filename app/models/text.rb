class Text < ActiveRecord::Base
    has_many :readings
	has_many :users, :through => :readings
	belongs_to :user
end
