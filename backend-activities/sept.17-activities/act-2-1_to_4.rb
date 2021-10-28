# Activity No.1
arr = [1,3,5,7,9,11]
num = 3
arr.each do |match|
    if match == num
        puts "Number matched."
    else
        puts "Number doesn't match."
    end
end

# Activity No.2
numbers = 0...100
numbers.each do |check|
    if check == 0 && check <= 50 
        puts "Number is between 0 to 50."
    elsif check == 50 && check <= 100
        puts "Number is between 51 to 100."
    while check < 100
        puts "Number is above 100."
    end
end

# Activity No.3
input = ""

    while input != "STOP"
       puts "Say it when the command will stop."
       input.gets.chomp
    end

# Activity No.4
arr = [6, 3, 1, 8, 4, 2, 10, 65, 102]
arr_2 = []

arr.each do |even|
    if even % 2 == 0
        arr_2.push(even)
    end
end
puts arr_2