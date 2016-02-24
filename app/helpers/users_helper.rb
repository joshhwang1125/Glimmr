# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  profile_pic     :string
#  password_digest :string           not null
#  session_token   :string           not null
#  summary         :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

module UsersHelper
end
