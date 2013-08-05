class Showtime < ActiveRecord::Base
  attr_accessible :end_date, :movie_id, :price, :show_time, :start_date
  belongs_to :movies
end
