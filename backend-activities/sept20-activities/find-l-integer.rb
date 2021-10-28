def smallest_integer(arr)
    current_int = arr[0]  
    for num in arr      
      if num < current_int
        current_int = num  
    return current_min
      end
    end
end

puts smallest_integer([34, 15, 88, 2])
puts smallest_integer([34, -345, -1, 100])