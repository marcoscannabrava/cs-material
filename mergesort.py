# # ---------- Also Working ----------
# def merge(left, right):
#   result = []
#   i, j = 0, 0
#   while (i < len(left)) and (j < len(right)):
#     if left[i] < right[j]:
#       result.append(left[i])
#       i += 1
#     else:
#       result.append(right[j])
#       j += 1
#   return result + left[i:] + right[j:]

def merge(left, right):
  result = []
  while left and right:
    result.append((left if left[0] <= right[0] else right).pop(0))
  return result + left + right

def mergesort(input_list):
  if len(input_list) <= 1: return input_list

  mid = len(input_list) // 2
  return merge(mergesort(input_list[:mid]), mergesort(input_list[mid:]))

print(mergesort([4, 2, 6, 8, 3]))
