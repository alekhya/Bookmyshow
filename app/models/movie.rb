class Movie < ActiveRecord::Base
  attr_accessible :duration, :language, :name, :release_date, :stars, :story_line
  has_many :showtimes
  has_many :reviews
end
