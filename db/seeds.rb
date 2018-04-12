# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Completed_lesson.delete_all
# Lesson.delete_all
# User.delete_all

#Users
vanessa = User.create(email: "van@gmail.com", password: "van")

#Lessons
lesson1 = Lesson.create(name: "van", description: "van", slug: "van")

lesson2 = Completed_lesson.create(user_id: "1", lesson_id: "1", completed: "true")
