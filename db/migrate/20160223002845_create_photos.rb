class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.text :description
      t.string :photo_url, null: false

      t.timestamps null: false
    end
    add_index :photos, :owner_id
  end
end
