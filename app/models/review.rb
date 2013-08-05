class Review < ActiveRecord::Base
  attr_accessible :comment, :movie_id, :rating, :review_date, :user
  belongs_to :movies
end
