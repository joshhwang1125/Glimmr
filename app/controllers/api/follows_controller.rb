class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
    if (params[:followerId])
      @follows = @follows.where(follower_id: params[:followerId])
    end
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render 'create'
    else
      render json: { errors: @follow.errors.full_messages }, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render 'create'
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
