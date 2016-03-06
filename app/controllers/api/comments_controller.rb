class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user, :photo)
    if (params[:photoId])
      @comments = @comments.where(photo_id: params[:photoId])
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'create'
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'create'
  end


  private

  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end

end
