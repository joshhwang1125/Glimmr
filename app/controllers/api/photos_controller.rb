class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      redirect_to root_url
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:user_id, :title, :description, :photo_url)
  end

end
