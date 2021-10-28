def perfect_square(n)
    (o..n).each do |int|
        return true if int * int == n
    end
    return false
end