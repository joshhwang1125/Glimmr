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
#  cover_photo     :string
#

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

class User < ActiveRecord::Base

  has_many :photos
  has_many :favorites, dependent: :destroy
  has_many :favorited_photos, through: :favorites, source: :photo


  attr_reader :password
  validates :email, :username, :password_digest, :session_token,  presence: true
  validates :email, :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

   def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
