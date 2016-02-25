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

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)


    if @user.save
      sign_in(@user)

      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
