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

user_bio_samples = [
  "User bio works"
]

photo_title_samples = [
  "Capture the Moment",
  "Everybody Needs Beauty",
  "All Around Me",
  "Discovery",
  "Secret",
  "Life is Beautiful",
  "Memories",
  "Abstraction of Dreams",
  "Shimmering Creation",
  "Singularity",
  "Dimensionality",
  "Contrast and Babble",
  "Contrast of Dreams",
  "Modern Significance",
  "Invisible Element",
  "Metamorphosis",
  "Creation",
  "Vision",
  "Abstraction of Sorrow",
  "Perception & Analysis",
  "The Conceptual Eye"
]

photo_description_samples = [
  "I was driving down a country road alone and looked to my left and saw this. I knew I had to stop and capture it with my camera.",
  "The north end of Coniston water remains one of my favorite locations. In winter, when the crowds have gone and the only sound is made by the gentle lap of water against the jetty posts, it is a place of peace and tranquility. Note to self: wide angle is called wide angle for a reason.",
  "The low light of December days is a challenge for every photographer. I hope you enjoy the image and I wish you all a very happy new year.",
  "The weather here is not very good for photography just now so this is another picture dug up from my archives. It's a lovely place to chill and have lunch before exploring the surrounding area.",
  "Sorry for the title, I couldn't help myself. Once it popped into my head it wouldn't go away. My apologies for posting a similar photo previously, but I ended up liking this one better. Thanks for taking the time to look. Hope you enjoy!",
  "First shot in a while.",
  "One from a few months back. Enjoy! Happy New Year!",
  "Thank you very much for your views, favorites, and comments. I appreciate it a lot! I'm still trying to catch up...",
  "Froze my butt off for twenty minutes and not sure how I feel about the result. Thanks for stopping by!",
  "So glad we got a chance to admire this sight again this year. It feels like forever, but it's totally worth the wait. Hoping to be more regular with posting. We'll see what happens!"
]

user1 = User.create(id: 1, username: "DrDemo", email: "demo@gmail.com",
  password: "demodemo", profile_pic: "1.jpg", cover_photo: "11.jpg",  summary: "I love natures and demos!")
user2 = User.create(id: 2, username: "MajorTom", email: "majortom@gmail.com" ,
  password: "groundcontrol", profile_pic: "1.jpg", cover_photo: "n3_dgjs5g.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")

Photo.create(id: 1, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "1.jpg")
Photo.create(id: 2, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "2.jpg")
Photo.create(id: 3, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "3.jpg")
Photo.create(id: 4, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "4.jpg")
Photo.create(id: 5, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "5.jpg")
Photo.create(id: 6, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "6.jpg")
Photo.create(id: 7, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "7.jpg")
Photo.create(id: 8, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "8.jpg")
Photo.create(id: 9, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "9.jpg")
Photo.create(id: 10, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "10.jpg")
Photo.create(id: 11, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "11.jpg")
Photo.create(id: 12, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "12.jpg")
Photo.create(id: 13, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "13.jpg")
Photo.create(id: 14, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "14.jpg")
Photo.create(id: 15, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "15.jpg")
Photo.create(id: 16, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n1_llakni.jpg")
Photo.create(id: 17, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n2_jp0kyp.jpg")
Photo.create(id: 18, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n3_dgjs5g.jpg")
Photo.create(id: 19, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n4_l1djew.jpg")
Photo.create(id: 20, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n5_b0sozi.jpg")
Photo.create(id: 21, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n6_qctkna.jpg")
Photo.create(id: 22, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n7_ppsviy.jpg")
Photo.create(id: 23, user_id: user2.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "n8_ovcmye.jpg")

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
Favorite.create(user_id: 1, photo_id: 23)
