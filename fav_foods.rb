def fav_foods
  food_array=Array.new #"[]" can be used instad of Array.new
  3.times do
    puts "Name a favorate food."
    food_array<<gets.chomp
  end
  p food_array.each
  puts"your favorate foods are #{food_array.join(', ')}."
  food_array.each{|food| puts "I like #{food} too!"}
end

fav_foods
