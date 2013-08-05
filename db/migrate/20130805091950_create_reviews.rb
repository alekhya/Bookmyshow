class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :comment
      t.string :user
      t.date :review_date
      t.integer :rating
      t.integer :movie_id

      t.timestamps
    end
  end
end
