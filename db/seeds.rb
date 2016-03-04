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

user1 = User.create(id: 1, username: "Demo Dog", email: "demo@gmail.com",
  password: "demodemo", profile_pic: "1.jpg", cover_photo: "11.jpg",  summary: dog_story)
user2 = User.create(id: 2, username: "MajorTom", email: "majortom@gmail.com" ,
  password: "groundcontrol", profile_pic: "0.jpg", cover_photo: "n3_dgjs5g.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user3 = User.create(id: 3, username: "Stewart Butterfield", email: "butterfield@gmail.com" ,
  password: "demodemo", profile_pic: "stewart_oz3fm0.jpg", cover_photo: "11.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user4 = User.create(id: 4, username: "Professor Meowington", email: "meowington@gmail.com" ,
  password: "demodemo", profile_pic: "meowington_mrkodh.jpg", cover_photo: "11.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user5 = User.create(id: 5, username: "JLaw", email: "jlaw@gmail.com" ,
  password: "demodemo", profile_pic: "jlaw_c5kufy.jpg", cover_photo: "11.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user6 = User.create(id: 6, username: "TheBeard", email: "thebeard@gmail.com" ,
  password: "demodemo", profile_pic: "James-Harden1_cazean.jpg", cover_photo: "11.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user7 = User.create(id: 7, username: "Yeezy", email: "yeezy@gmail.com" ,
  password: "demodemo", profile_pic: "yeezy_mbw3x3.jpg", cover_photo: "11.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")
user8 = User.create(id: 8, username: "FeelTheBern", email: "feelthebern@gmail.com" ,
  password: "demodemo", profile_pic: "bernie_c6ix1l.jpg", cover_photo: "11.jpg", summary: "I'm stepping through the door, and I'm floating in a most peculiar way, and the stars look very different today")


Photo.create(id: 1, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "s4.jpg")
Photo.create(id: 2, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "2.jpg")
Photo.create(id: 3, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "3.jpg")
Photo.create(id: 4, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "4.jpg")
Photo.create(id: 5, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "5.jpg")
Photo.create(id: 6, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "6.jpg")
Photo.create(id: 7, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "7.jpg")
Photo.create(id: 8, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "8.jpg")
Photo.create(id: 9, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "9.jpg")
# Photo.create(id: 10, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "10.jpg")
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

Follow.create(id: 1, followee_id: 2, follower_id: 1)
Follow.create(id: 2, followee_id: 1, follower_id: 2)
Follow.create(id: 3, followee_id: 3, follower_id: 1)
Follow.create(id: 4, followee_id: 4, follower_id: 1)
Follow.create(id: 5, followee_id: 5, follower_id: 1)
Follow.create(id: 6, followee_id: 6, follower_id: 1)
Follow.create(id: 7, followee_id: 7, follower_id: 1)
Follow.create(id: 8, followee_id: 8, follower_id: 1)
Follow.create(id: 9, followee_id: 3, follower_id: 2)
Follow.create(id: 10, followee_id: 4, follower_id: 2)
Follow.create(id: 11, followee_id: 5, follower_id: 2)
Follow.create(id: 12, followee_id: 6, follower_id: 2)

# Comment.create(id: 1, photo_id: 1, user_id: 1, body: "I like cheese")
# Comment.create(id: 13, photo_id: 1, user_id: 2, body: "Boogie boogie")
# Comment.create(id: 14, photo_id: 1, user_id: 3, body: "Schwarma")
# Comment.create(id: 15, photo_id: 1, user_id: 4, body: "Biggie smalls")
# Comment.create(id: 16, photo_id: 1, user_id: 5, body: "Yo mama")
# Comment.create(id: 2, photo_id: 2, user_id: 1, body: "I like cheese")
# Comment.create(id: 3, photo_id: 3, user_id: 1, body: "I like cheese")
# Comment.create(id: 4, photo_id: 4, user_id: 1, body: "I like cheese")
# Comment.create(id: 5, photo_id: 5, user_id: 1, body: "I like cheese")
# Comment.create(id: 6, photo_id: 6, user_id: 1, body: "I like cheese")
# Comment.create(id: 7, photo_id: 7, user_id: 1, body: "I like cheese")
# Comment.create(id: 8, photo_id: 8, user_id: 1, body: "I like cheese")
# Comment.create(id: 9, photo_id: 9, user_id: 1, body: "I like cheese")
# Comment.create(id: 11, photo_id: 11, user_id: 1, body: "I like cheese")
# Comment.create(id: 12, photo_id: 12, user_id: 1, body: "I like cheese")
