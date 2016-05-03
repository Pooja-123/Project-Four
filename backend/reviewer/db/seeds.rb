# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Contact.delete_all
Review.delete_all

Contact.create!([
  {id: 1, name: "Shiva", email:"shiva@gmail.com", active: true},
  {id: 2, name: "Ganesh",email:"ganesha@gmail.com", active: true},
  {id: 3, name: "Gauri",email:"Gauri@gmail", active: true},
  {id: 4, name: "Kartika",email:"kartika@gmail.com", active: true},
  {id: 5, name: "Saraswati",email:"saraswati@gmail.com",active: true}
])

Review.create!([
  {id: 1,  user_id: 1,user: "Pooja", rating: 1},
  {id: 2,  user_id: 2,user: "Richa", rating: 4},
  {id: 3,  user_id: 3,user: "Rayan", rating: 5},
  {id: 4,  user_id: 4,user: "Rajat", rating: 5},
  {id: 5,  user_id: 5,user: "Vijay", rating: 4},
  {id: 6,  user_id: 6,user: "Suman", rating: 1},
  {id: 7,  user_id: 7,user: "Kitta", rating:4}
])
