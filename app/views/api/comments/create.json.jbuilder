json.id @comment.id
json.user_id @comment.user_id
json.photo_id @comment.photo_id
json.body @comment.body
json.user @comment.user
json.created_at @comment.created_at.strftime('%e %b %Y %H:%M:%S%p')