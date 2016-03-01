# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ActiveRecord::Base
  validates :follower_id, :followee_id, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id }
  # validates :not_following_self

  belongs_to :follower, class_name: "User"
  belongs_to :followee, class_name: "User"

  # def not_following_self
  #   if self.follower_id == self.followee_id
  #     errors.add(:follower_id, "You cannot follow yourself")
  #     errors.add(:followee_id, "You cannot follow yourself")
  #   end
  # end
end
