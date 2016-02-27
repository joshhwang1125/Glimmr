json.id @user.id
json.username @user.username
json.email @user.email
json.profile_pic @user.profile_pic
json.summary @user.summary
json.cover_photo @user.cover_photo
json.created_at @user.created_at

json.photos @user.photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.photo_url photo.photo_url
end