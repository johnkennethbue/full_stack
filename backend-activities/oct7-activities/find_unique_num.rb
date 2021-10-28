def find_uniq(arr)
    arr.uniq.find { |e| arr.count(e) == 1 }
end