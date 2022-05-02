const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.rroot = null
  }
  root() {
    if (!this.rroot) return null
    return this.rroot
  }

  add(value) {
    this.rroot = addNode(this.rroot, value)

    function addNode(node, value) {
      if (!node) {
        return new Node(value)
      }
      if (node.data == value) {
        return node
      }
      if (node.data < value) {
        node.left = addNode(node.left, value)
      } else {
        node.right = addNode(node.right, value)
      }
      return node
    }
  }

  has(value) {
    return ifHas(this.rroot, value)
    function ifHas(node, value) {
      if (!node) return false
      if (node.data == value) {
        return true
      } else if (node.data < value) {
        return ifHas(node.left, value)
      } else {
        return ifHas(node.right, value)
      }
    }
  }

  find(value) {
    return findValue(this.rroot, value)
    function findValue(node, value) {
      if (!node) return null
      if (node.data == value) {
        return node
      } else if (node.data < value) {
        return findValue(node.left, value)
      } else if (node.data >= value) {
        return findValue(node.right, value)
      }
    }
  }

  remove(value) {
    return removeNode(this.rroot, value)
    function removeNode(node, value) {
      if (!node) return null

      if (node.data < value) {
        node.left = removeNode(node.left, value)
        return node
      } else if (node.data > value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.right) {
          node = node.left
          return node
        }
        if (!node.left) {
          node = node.right
          return node
        }
        let minRightNode = node.right
        while (minRightNode.left) {
          minRightNode = minRightNode.left
        }
        node.data = minRightNode.data
        node.right = removeNode(node.right, minRightNode.data)
        return node
      }
    }
  }

  min() {
    if (!this.rroot) {
      return
    }
    let nod = this.rroot
    while (nod.right) {
      nod = nod.right
    }
    return nod.data
  }

  max() {
    if (!this.rroot) {
      return
    }
    let nod = this.rroot
    while (nod.left) {
      nod = nod.left
    }
    return nod.data
  }
}

module.exports = {
  BinarySearchTree
};