json.array! @follows do |follow|
  json.id follow.id
  json.follower_id follow.follower_id
  json.followee_id follow.followee_id

  json.followee do
    json.id follow.followee.id
    json.username follow.followee.username
    json.profile_pic follow.followee.profile_pic
  end

end