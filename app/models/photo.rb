# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  title       :string           not null
#  description :text
#  photo_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :owner_id, :title, :photo_url, presence: true

  belongs_to :user
end
