class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.includes(:user, :favorites)
    if (params[:currentUserId])
      @photos = @photos.where(user_id: params[:currentUserId])
    end
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      redirect_to root_url
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  # def show
  #   @photo = Photo.includes(:favorites).find(params[:id])
  # end

  def update
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render 'index'
  end


  private

  def photo_params
    params.require(:photo).permit(:user_id, :title, :description, :photo_url)
  end

end
