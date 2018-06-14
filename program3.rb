def choose
  puts "do you like programing? yes or no please."
  choice= gets.chomp
  case choice.downcase
  when 'yes'
    puts "that\'s great"
  when 'no'
    puts 'that\'s too bad'
  when 'maybe'
    puts 'glad you are giving it a chance'
  else
    puts 'what do you mean'
  end
end
choose
