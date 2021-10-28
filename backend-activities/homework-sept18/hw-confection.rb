
class Confection
end

class Cup_cake < Confection
    def prepare
        puts "Baking at 350 degrees for 25 minutes."
        puts "Applying frosting"
    end
end

class Banana_cake < Confection
    def prepare
        puts "Baking at 350 degrees for 25 minutes."
    end
end

banana_cake = Banana_cake.new()
puts banana_cake.class
puts banana_cake.class.superclass
puts banana_cake.prepare

cup_cake = Cup_cake.new()
puts cup_cake.class
puts cup_cake.class.superclass
puts cup_cake.prepare