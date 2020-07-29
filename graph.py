# -----------------------------------------------------
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        

# Graph with BFS & DFS
from collections import defaultdict 

# This class represents a directed graph using adjacency list representation 
class Graph: 
    def __init__(self): 
        self.graph = defaultdict(list) 

    def add_edge(self,u,v): 
        self.graph[u].append(v) 

    def bfs(self, start): 
        visited, queue = set(start), [start]

        while queue:   
            v = queue.pop(0) 
            for adj in self.graph[v]: 
                if adj not in visited: 
                    queue.append(adj)
                    visited.add(adj)

        return visited

    def dfs(self, start): 
        visited, stack = set(start), [start]

        while stack:
            v = stack.pop()   
            visited.add(v)
            for adj in reversed(self.graph[v]):
                if adj not in visited: stack.append(adj)

        return visited

    def in_order_traversal(self, root):
        res = []
        if root:
            res = self.in_order_traversal(root.left)
            res.append(root.data)
            res += self.in_order_traversal(root.right)
        return res

    def pre_order_traversal(self, root):
        res = []
        if root:
            res = [root.data]
            res += self.pre_order_traversal(root.left)
            res += self.pre_order_traversal(root.right)
        return res

    def post_order_traversal(self, root):
        res = []
        if root:
            res = self.post_order_traversal(root.left)
            res += self.post_order_traversal(root.right)
            res.append(root.data)
        return res



  
# Driver code 
  
# Create a graph given in 
# the above diagram 
g = Graph() 
g.add_edge(0, 1) 
g.add_edge(0, 2) 
g.add_edge(1, 2) 
g.add_edge(2, 0) 
g.add_edge(2, 3) 
g.add_edge(3, 3) 
  
print ("Following is Breadth First Traversal"
                  " (starting from vertex 2)") 
g.bfs(2) 
  
# This code is contributed by Neelam Yadav 