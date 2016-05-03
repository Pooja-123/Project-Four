json.contact @contacts do |contact|
json.name contact.name
json.id contact.id
json.active contact.active
json.email contact.email

# json.review contact.review do |review|
#   json.user review.user
#   json.rating review.rating
#   end
end
