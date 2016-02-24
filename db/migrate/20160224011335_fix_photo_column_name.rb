class FixPhotoColumnName < ActiveRecord::Migration
  def change
    rename_column :photos, :owner_id, :user_id
  end
end
