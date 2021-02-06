# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

notes = [
    {
        "id": 1,
        "content": "I felt very unhappy today looking out the window at the dreary clouds outside."
    },

    {
        "id": 2,
        "content": "The sun sure makes me glad to go for a walk with my friend in the morning!"
    }
]


notes.each do |note| 
    Note.create!(content: note[:content])
 end