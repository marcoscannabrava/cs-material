def find_duplicates(array) # It's bugged, skipping items
  result = []
  array.each do |n|
    p "looking at #{array}"
    p "looking at first element #{n}"
    array.delete_at(array.index(n))
    p "just deleted #{n} and now i have #{array}"
    result << n if array.include?(n) && !result.include?(n)
    p "result so far is #{result}"
    p "next iteration -----------"
  end
  result
end

def find_duplicates2(array)
  result = []
  # for each element 'item'
  array.each_with_index do |item, index|
    # compare to the rest
    p "current item is #{item}"
    p "current index is #{index}"
    rest = array.drop(index + 1)
    p "rest is #{rest}"
    # if the rest includes 'item'
    # push 'item' into result if not already in result
    result << item if rest.any? { |n| n == item } && !result.include?(item)
    p "result is #{result}"
  end
  result
end

def find_duplicates3(array, result = [])
  return result if array.empty?

  item = array.pop
  result << item if array.include?(item)
  array.delete(item)
  find_duplicates3(array, result)
end

# --------------------- TESTING ---------------------
test = [1, 2, 3, 3, 4, 5, 6, 3, 4, 3, 5, 4]
p find_duplicates3(test)