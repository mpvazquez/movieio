class AddAttributes < ActiveRecord::Migration
  def change
    change_table :movies do |t|
      t.string :title
      t.string :poster_url
      t.boolean :seen
    end
  end
end
