class Api::FavoritesController < ApplicationController

  def index
    @favorites = Favorite.all
    if (params[:userId])
      @favorites = @favorites.where(user_id: params[:userId])
    end
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render 'create'
    else
      render json: { errors: @favorite.errors.full_messages }, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render json: {}
  end


  private

  def favorites_params
    params.require(:favorite).permit(:user_id, :photo_id)
  end

end
