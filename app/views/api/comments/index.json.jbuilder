json.array! @comments do |comment|
  json.id comment.id
  json.user_id comment.user_id
  json.photo_id comment.photo_id
  json.body comment.body

  json.user do
    json.id comment.user.id
    json.username comment.user.username
  end

  json.photo do
    json.id comment.photo.id
    json.user_id comment.photo.user_id
    json.total_comments comment.photo.comments.length
  end
end