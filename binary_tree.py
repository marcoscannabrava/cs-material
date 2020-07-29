class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root=None): 
        self.root = root

    def search(self, value):
        node = self.root
        while node is not None and node.data is not value:
            node = node.right if value > node.data else node.left
        return node

