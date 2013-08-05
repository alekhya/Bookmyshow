class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :name
      t.string :stars
      t.date :release_date
      t.string :story_line
      t.integer :duration
      t.string :language

      t.timestamps
    end
  end
end
