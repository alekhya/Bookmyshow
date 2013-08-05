class CreateShowtimes < ActiveRecord::Migration
  def change
    create_table :showtimes do |t|
      t.datetime :show_time
      t.date :start_date
      t.date :end_date
      t.integer :price
      t.integer :movie_id

      t.timestamps
    end
  end
end
