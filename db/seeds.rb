# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Photo.delete_all

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

user1 = User.create(username: "DrDemo", email: "demo@gmail.com" , password: "demodemo", summary: user_bio_samples.sample)

Photo.create(id: 7, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "1.jpg")
Photo.create(id: 4, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "2.jpg")
Photo.create(id: 5, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "3.jpg")
Photo.create(id: 17, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "4.jpg")
Photo.create(id: 1, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "5.jpg")
Photo.create(id: 18, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "6.jpg")
Photo.create(id: 49, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "7.jpg")
Photo.create(id: 53, user_id: user1.id, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "8.jpg")
