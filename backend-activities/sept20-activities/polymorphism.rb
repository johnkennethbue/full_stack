# Polymorphism using Inheritance

class Vehicle
	def fuelType
		puts "Vehicle depending on fuel types"
	end
end

class Car < Vehicle
	def fuelType
		puts "Gasoline"
	end
end

class Truck < Vehicle
	def fuelType
		puts "Diesel"
	end
end

class EV < Vehicle
	def fuelType
		puts "Electricity"
	end
end

vehicle = Vehicle.new
vehicle.fuelType()

vehicle = Car.new
vehicle.fuelType()

vehicle = Truck.new
vehicle.fuelType()

vehicle = EV.new
vehicle.fuelType()