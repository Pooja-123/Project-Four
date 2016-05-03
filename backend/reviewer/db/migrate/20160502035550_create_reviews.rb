class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :user
      t.string :name
      t.integer :rating

      t.timestamps null: false
    end
  end
end
