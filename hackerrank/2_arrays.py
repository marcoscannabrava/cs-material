def hourglassSum(arr):
    max_num = -100
    for j in range(4):
        for i in range(4):
            hg_sum = sum(arr[i][j:j+3]) + arr[i+1][j+1] + sum(arr[i+2][j:j+3])
            if hg_sum > max_num: max_num = hg_sum
            print(hg_sum)
    return max_num


# matrix = """1 1 1 0 0 0
# 0 1 0 0 0 0
# 1 1 1 0 0 0
# 0 0 2 4 4 0
# 0 0 0 2 0 0
# 0 0 1 2 4 0"""

# arr = []
# for line in matrix.split("\n"):
#     arr.append(list(map(lambda x: int(x), line.split(' '))))

# print(arr)
# print(hourglassSum(arr))

def rotLeft(a, d):
	result=[]
	for i in range(len(a)):
		x = d % len(a) + i
		if x >= len(a): x-=len(a)
		print('x', x, 'a[x]', a[x])
		result.append(a[x])
	return result


def minimumSwaps(arr):
	swaps = len(arr) - 1
	for idx, item in enumerate(arr):
		if (idx + 1 == item): 
			swaps -= 1
		elif (idx + 1 == arr[(item - 1)]): 
			swaps -= 1
	return swaps
# d=[2, 3, 5, 1, 4] # none in place, no swap solves 2 => swaps = n - 1 = 4 (max_swaps)
# d=[5, 3, 4, 2, 1] # 1 swap solves 2 => swaps = n - 2 = 3 (-1 swap)
# d=[5, 4, 3, 2, 1] # + 1 in place => swaps = n - 3 = 2 (-1 swap)

# all should equal 3
a=[4, 3, 1, 2] 
b=[2, 3, 4, 1, 5]
c=[1, 3, 5, 2, 4, 6, 7]
print(minimumSwaps(a))
print(minimumSwaps(b))
print(minimumSwaps(c))

