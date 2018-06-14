class Pet
  attr_reader :color, :breed
  attr_accessor :name
  def initialize(color, breed)
    @color=color
    @breed=breed
    @hungry=true
  end
  def feed(food)
    puts "Mmmm, "+ food +"!"
    @hungry=false
  end
  def hungry?
    if @hungry
      puts"I'm hungry!"
    else
      puts"I'm full!"
    end
    @hungry
  end
end
class Cat < Pet
  def speak
    puts "meow!"
  end
end
class Dog< Pet
  def speak
    puts "Woof!"
  end
end
puppy=Dog.new("black","Staffordshire Terrier")
puppy.speak
puts puppy.breed
kitty=Cat.new('grey','Persian')
puts"Let's inspect our new cat:"
puts kitty.inspect
puts "what class dose our new cat belong to?"
puts kitty.class
puts"is our new cat an object?"
puts kitty.is_a?(Object)
puts "what color is your cat?"
puts kitty.color
puts "let's give it a name"
kitty.name = "Betsy"
puts kitty.name
puts "is our cat hungry now?"
kitty.hungry?
puts"lets feed our cat"
kitty.feed('tuna')
puts "is out cat hungry now?"
kitty.hungry?
puts"our cat can make noise"
kitty.speak
