# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Photo.delete_all
Favorite.delete_all
Follow.delete_all
Comment.delete_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

user_bio_samples = [
  "User bio works"
]

photo_title_samples = [
  "Echoes of the Unknown",
  "Ancient One",
  "Coming Home",
  "Embrace",
  "Eye of the Spirit",
  "Fabric of Life",
  "Memories",
  "Abstraction of Dreams",
  "Shimmering Creation",
  "Faith and Hope",
  "Flowing into Fall",
  "Garden of Light",
  "Contrast of Dreams",
  "Modern Significance",
  "Abstraction of Sorrow",
  "Perception & Analysis",
  "The Conceptual Eye",
  "Gathered Together",
  "Heart of Creation",
  "Laid to Rest",
  "Landscapes of the Heart",
  "Life in Balance",
  "Maternal Iris",
  "Rates of Change",
  "Reaching for the Heavens",
  "Sweeping the Sky",
  "Tapestry of Life",
  "The Power of Zen",
  "Wise Heart",
  "Where Cranes Speak Freely"
]

dog_story = "It must be morning; I’m hungry. Then again, I’m always hungry, so it could really be any time.
I can hear the shower and feel the sun on my back, so I’m guessing the Boss is awake.
I lift my head off my bed and look down the passage.
I want a shower too.
Sometimes I try and get in but he won’t let me.
Boring.
He’s not so happy in the mornings any more.
He used to be, but things have changed.
I think it’s stress.

Not really sure what that is, but I know it’s not good.
It’s a human thing.
I’ve heard him talk about it on the phone.
Don’t really know what a phone is either, but I know they’re good to chew.
Chewing’s one of my favourite things.

I reckon the Boss should lie in the sun with me.
And chew his foot for a while.
It’s relaxing.
It might help with his stress.

Whatever that is."

photo_description_samples = [
  "While scouting for that image, I spotted this Whitebark Pine from afar. It was like a beacon drawing me to the crater rim.",
  "My exposure time for this image was twelve seconds. The long exposure blurred the water in the background, which explains the mystical feel. Because of wind moving some of the leaves, only one of my original transparencies was printable.",
  "I topped a rise and there before me was the most incredible bloom of Pale Evening Primrose flowers I could have imagined. In the midst of the flowers rose numerous red rock sandstone monoliths.",
  "When all the necessary elements come together, magic becomes reality.",
  "Locating compositions requires a combination of perfect conditions, being in the right place at the right time, and me feeling completely connected to my environment so that I can see the available compositions. If one of these elements is missing, rarely is a great image made.",
  "There are certain images I just know are going to be special. That evening as I walked back to camp, I could feel I had experienced something so special my spirit was touched deeply. ",
  "I took this photo on a whim!",
  "Just before the air was completely calm, I would experience a warming sensation on my face. That was my sign to release the shutter.",
  "Thank you very much for your views, favorites, and comments. I appreciate it a lot! I'm still trying to catch up...",
  "As I packed my equipment, I reflected on the process I had gone through two weeks before. I stood humbled by the experience.",
  "As I set up my camera, a group of school children passed behind me on the trail. They were curious and asked questions about the strange wooden camera. I answered briefly and shared with them my need to hurry before the wind started blowing. They moved off to observe sea otters on the point."
]

user1 = User.create(username: "Demo Dog", email: "demo@gmail.com",
  password: "demodemo", profile_pic: "1.jpg", cover_photo: "11.jpg",  summary: dog_story)
user2 = User.create(username: "MajorTom", email: "majortom@gmail.com" ,
  password: "groundcontrol", profile_pic: "0.jpg", cover_photo: "n3_dgjs5g.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user3 = User.create(username: "Stewart Butterfield", email: "butterfield@gmail.com" ,
  password: "demodemo", profile_pic: "stewart_oz3fm0.jpg", cover_photo: "2.jpg", summary: "I am  best known for being a co-founder of the photo sharing website Flickr and team messaging application Slack.")
user4 = User.create(username: "Professor Meowington", email: "meowington@gmail.com" ,
  password: "demodemo", profile_pic: "meowington_mrkodh.jpg", cover_photo: "3.jpg", summary: "Excuse me, this tea is purrrrfect, if I must say.")
user5 = User.create(username: "JLaw", email: "jlaw@gmail.com" ,
  password: "demodemo", profile_pic: "jlaw_c5kufy.jpg", cover_photo: "4.jpg", summary: "Pew pew I shoot arrows!")
user6 = User.create(username: "TheBeard", email: "thebeard@gmail.com" ,
  password: "demodemo", profile_pic: "James-Harden1_cazean.jpg", cover_photo: "5.jpg", summary: "Chef Harden in the house!!!")
user7 = User.create(username: "Yeezy", email: "yeezy@gmail.com" ,
  password: "demodemo", profile_pic: "yeezy_mbw3x3.jpg", cover_photo: "6.jpg", summary: "I just talked to Jesus, He said, 'What up, Yeezus?', I said, 'Shit I'm chillin', Tryna stack these millions'. I know he the most high, But I am a close high. Mi casa, su casa, That's our cosa nostra")
user8 = User.create(username: "FeelTheBern", email: "feelthebern@gmail.com" ,
  password: "demodemo", profile_pic: "bernie_c6ix1l.jpg", cover_photo: "7.jpg", summary: "Finally, let understand that when we stand together, we will always win. When men and women stand together for justice, we win. When black, white and Hispanic people stand together for justice, we win.")


Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s4.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "2.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "3.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "4.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "5.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "6.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "7.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "8.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "9.jpg")
# Photo.create(id: 10, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "10.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "11.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "12.jpg")
Photo.create(user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "13.jpg")
Photo.create( user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "14.jpg")
Photo.create( user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "15.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n1_llakni.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n2_jp0kyp.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n3_dgjs5g.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n4_l1djew.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n5_b0sozi.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n6_qctkna.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n7_ppsviy.jpg")
Photo.create( user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n8_ovcmye.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "f2_shyckq.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "f7_tkdxnn.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "f6_yljyap.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "f1_dasmgm.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "f3_ayngav.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "f4_okeog7.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "x7_zg7390.jpg")
Photo.create( user_id: user3.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "x3_ktvrc5.jpg")
Photo.create( user_id: user4.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "x5_wfaqph.jpg")
Photo.create( user_id: user4.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "x8_sfinwj.jpg")
Photo.create( user_id: user4.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "x2_rhexqv.jpg")
Photo.create( user_id: user4.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "glimmr/pm1cb4qiamfb3ngh6bej
.jpg")
Photo.create( user_id: user4.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s1_c6yeuk.jpg")
Photo.create( user_id: user5.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s2_vjxidg.jpg")
Photo.create( user_id: user5.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s3_jawlcj.jpg")
Photo.create( user_id: user5.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s5_bbovv0.jpg")
Photo.create( user_id: user5.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s6_a0lm0b.jpg")
Photo.create( user_id: user5.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s7_mvlw9f.jpg")
Photo.create( user_id: user5.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s8_dwi0jq.jpg")
Photo.create( user_id: user6.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s9_mi0uo3.jpg")
Photo.create( user_id: user6.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s10_hy6q3o.jpg")
Photo.create( user_id: user7.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "11725319825_a983834d28_k_lhbs9n.jpg")
Photo.create( user_id: user7.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "z3_whka9w.jpg")
Photo.create( user_id: user8.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "z2_nivivu.jpg")
Photo.create( user_id: user8.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "z1_j3whpa.jpg")



Favorite.create(user_id: 1, photo_id: 1)
Favorite.create(user_id: 1, photo_id: 4)
Favorite.create(user_id: 1, photo_id: 6)
Favorite.create(user_id: 1, photo_id: 8)
Favorite.create(user_id: 1, photo_id: 11)
Favorite.create(user_id: 1, photo_id: 13)
Favorite.create(user_id: 1, photo_id: 15)
Favorite.create(user_id: 1, photo_id: 19)
Favorite.create(user_id: 1, photo_id: 20)
Favorite.create(user_id: 1, photo_id: 21)
Favorite.create(user_id: 1, photo_id: 30)
Favorite.create(user_id: 1, photo_id: 31)
Favorite.create(user_id: 1, photo_id: 32)
Favorite.create(user_id: 1, photo_id: 33)
Favorite.create(user_id: 1, photo_id: 34)

Favorite.create(user_id: 2, photo_id: 32)
Favorite.create(user_id: 2, photo_id: 31)
Favorite.create(user_id: 2, photo_id: 35)
Favorite.create(user_id: 2, photo_id: 38)
Favorite.create(user_id: 2, photo_id: 12)
Favorite.create(user_id: 2, photo_id: 14)
Favorite.create(user_id: 2, photo_id: 22)
Favorite.create(user_id: 2, photo_id: 24)
Favorite.create(user_id: 2, photo_id: 26)
Favorite.create(user_id: 2, photo_id: 28)

Favorite.create(user_id: 3, photo_id: 7)
Favorite.create(user_id: 3, photo_id: 3)
Favorite.create(user_id: 3, photo_id: 2)
Favorite.create(user_id: 3, photo_id: 8)
Favorite.create(user_id: 3, photo_id: 23)
Favorite.create(user_id: 3, photo_id: 12)
Favorite.create(user_id: 3, photo_id: 16)
Favorite.create(user_id: 3, photo_id: 39)
Favorite.create(user_id: 3, photo_id: 26)

Favorite.create(user_id: 4, photo_id: 6)
Favorite.create(user_id: 4, photo_id: 9)
Favorite.create(user_id: 4, photo_id: 10)
Favorite.create(user_id: 4, photo_id: 13)
Favorite.create(user_id: 4, photo_id: 18)
Favorite.create(user_id: 4, photo_id: 23)
Favorite.create(user_id: 4, photo_id: 25)
Favorite.create(user_id: 4, photo_id: 29)
Favorite.create(user_id: 4, photo_id: 30)
Favorite.create(user_id: 4, photo_id: 31)

Favorite.create(user_id: 5, photo_id: 6)
Favorite.create(user_id: 5, photo_id: 7)
Favorite.create(user_id: 5, photo_id: 8)
Favorite.create(user_id: 5, photo_id: 9)
Favorite.create(user_id: 5, photo_id: 10)
Favorite.create(user_id: 5, photo_id: 11)
Favorite.create(user_id: 5, photo_id: 12)
Favorite.create(user_id: 5, photo_id: 13)
Favorite.create(user_id: 5, photo_id: 14)

Favorite.create(user_id: 6, photo_id: 32)
Favorite.create(user_id: 6, photo_id: 33)
Favorite.create(user_id: 6, photo_id: 34)
Favorite.create(user_id: 6, photo_id: 35)
Favorite.create(user_id: 6, photo_id: 36)
Favorite.create(user_id: 6, photo_id: 37)
Favorite.create(user_id: 6, photo_id: 38)
Favorite.create(user_id: 6, photo_id: 39)


Favorite.create(user_id: 8, photo_id: 26)
Favorite.create(user_id: 8, photo_id: 27)
Favorite.create(user_id: 8, photo_id: 28)
Favorite.create(user_id: 8, photo_id: 29)
Favorite.create(user_id: 8, photo_id: 30)
Favorite.create(user_id: 8, photo_id: 31)


Follow.create(followee_id: 2, follower_id: 1)
Follow.create(followee_id: 1, follower_id: 2)
Follow.create(followee_id: 3, follower_id: 1)
Follow.create(followee_id: 4, follower_id: 1)
Follow.create(followee_id: 5, follower_id: 1)
Follow.create(followee_id: 6, follower_id: 1)
Follow.create(followee_id: 7, follower_id: 1)
Follow.create(followee_id: 8, follower_id: 1)
Follow.create(followee_id: 3, follower_id: 2)
Follow.create(followee_id: 4, follower_id: 2)
Follow.create(followee_id: 5, follower_id: 2)
Follow.create(followee_id: 6, follower_id: 2)

Follow.create(followee_id: 8, follower_id: 3)
Follow.create(followee_id: 2, follower_id: 3)
Follow.create(followee_id: 4, follower_id: 3)
Follow.create(followee_id: 5, follower_id: 3)
Follow.create(followee_id: 6, follower_id: 3)

Follow.create(followee_id: 8, follower_id: 4)
Follow.create(followee_id: 3, follower_id: 4)
Follow.create(followee_id: 7, follower_id: 4)
Follow.create(followee_id: 5, follower_id: 4)
Follow.create(followee_id: 6, follower_id: 4)

Follow.create(followee_id: 8, follower_id: 5)
Follow.create(followee_id: 3, follower_id: 5)
Follow.create(followee_id: 2, follower_id: 5)
Follow.create(followee_id: 1, follower_id: 5)
Follow.create(followee_id: 6, follower_id: 5)

Follow.create(followee_id: 1, follower_id: 6)
Follow.create(followee_id: 2, follower_id: 6)
Follow.create(followee_id: 4, follower_id: 6)
Follow.create(followee_id: 5, follower_id: 6)
Follow.create(followee_id: 8, follower_id: 6)

Follow.create(followee_id: 2, follower_id: 7)
Follow.create(followee_id: 8, follower_id: 7)
Follow.create(followee_id: 4, follower_id: 7)
Follow.create(followee_id: 5, follower_id: 7)
Follow.create(followee_id: 6, follower_id: 7)

Follow.create(followee_id: 1, follower_id: 8)
Follow.create(followee_id: 3, follower_id: 8)
Follow.create(followee_id: 4, follower_id: 8)
Follow.create(followee_id: 5, follower_id: 8)
Follow.create(followee_id: 6, follower_id: 8)

Comment.create(photo_id: 1, user_id: 6, body: "Beautiful shot!")
Comment.create(photo_id: 4, user_id: 2, body: "Amazing!")
Comment.create(photo_id: 1, user_id: 3, body: "Cool!")
Comment.create(photo_id: 2, user_id: 4, body: "purrrrr")
Comment.create(photo_id: 1, user_id: 7, body: "I've see better")
Comment.create(photo_id: 2, user_id: 7, body: "Beyonce had a better photo")
Comment.create(photo_id: 3, user_id: 7, body: "I'm a GOD!")
Comment.create(photo_id: 5, user_id: 7, body: "My music is the sound of this world")
Comment.create(photo_id: 5, user_id: 2, body: "I like cheese")
Comment.create(photo_id: 6, user_id: 4, body: "Meowwww")
Comment.create(photo_id: 9, user_id: 5, body: "Thumbs up!")
Comment.create(photo_id: 8, user_id: 6, body: "Congrats on this picture!")
Comment.create(photo_id: 9, user_id: 3, body: "Great!")
Comment.create(photo_id: 11, user_id: 8, body: "I like it! :) Keep up the good work")
Comment.create(photo_id: 12, user_id: 8, body: "Very nice shot!")
Comment.create(photo_id: 13, user_id: 2, body: "AWESOME")
Comment.create(photo_id: 14, user_id: 3, body: "Fantastic photo!")
Comment.create(photo_id: 15, user_id: 4, body: "Hissss")
Comment.create(photo_id: 16, user_id: 1, body: "Bark bark bark bark")
Comment.create(photo_id: 17, user_id: 2, body: "Excellent!")
Comment.create(photo_id: 18, user_id: 5, body: "Great work!")
Comment.create(photo_id: 19, user_id: 4, body: "meow meow")
Comment.create(photo_id: 20, user_id: 8, body: "I like it! :) Keep up the good work")
Comment.create(photo_id: 22, user_id: 8, body: "Very nice shot!")
Comment.create(photo_id: 23, user_id: 2, body: "AWESOME")
Comment.create(photo_id: 24, user_id: 3, body: "Fantastic photo!")
Comment.create(photo_id: 25, user_id: 4, body: "Hissss")
Comment.create(photo_id: 26, user_id: 1, body: "Bark bark bark bark")
Comment.create(photo_id: 27, user_id: 2, body: "Excellent!")
Comment.create(photo_id: 28, user_id: 5, body: "Great work!")
Comment.create(photo_id: 29, user_id: 4, body: "meow meow")
Comment.create(photo_id: 31, user_id: 8, body: "I like it! :) Keep up the good work")
Comment.create(photo_id: 32, user_id: 8, body: "Very nice shot!")
Comment.create(photo_id: 33, user_id: 2, body: "AWESOME")
Comment.create(photo_id: 34, user_id: 3, body: "Fantastic photo!")
Comment.create(photo_id: 35, user_id: 4, body: "Hissss")
Comment.create(photo_id: 36, user_id: 1, body: "Bark bark bark bark")




