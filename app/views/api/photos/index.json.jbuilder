json.array! @photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.photo_url photo.photo_url

  json.user do
    json.id photo.user.id
    json.username photo.user.username
    json.email photo.user.email
    json.summary photo.user.summary
    json.profile_pic photo.user.profile_pic
    json.cover_photo photo.user.cover_photo
  end
end