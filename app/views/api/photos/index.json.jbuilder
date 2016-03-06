json.array! @photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.photo_url photo.photo_url
  json.total_favorites photo.favorites.length
  json.created_at photo.created_at.strftime('%e %b %Y %H:%M:%S%p')

  json.user do
    json.id photo.user.id
    json.username photo.user.username
    json.email photo.user.email
    json.summary photo.user.summary
    json.profile_pic photo.user.profile_pic
    json.cover_photo photo.user.cover_photo
  end
end