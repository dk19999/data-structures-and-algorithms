class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preorderTraversal(currentNode = this.root, result = []) {
    if (!currentNode) {
      return result;
    }

    result.push(currentNode.value);

    this.preorderTraversal(currentNode.left, result);
    this.preorderTraversal(currentNode.right, result);

    return result;
  }

  inorderTraversal(currentNode = this.root, result = []) {
    if (!currentNode) {
      return result;
    }
    this.inorderTraversal(currentNode.left, result);

    result.push(currentNode.value);

    this.inorderTraversal(currentNode.right, result);

    return result;
  }

  postorderTraversal(currentNode = this.root, result = []) {
    if (!currentNode) {
      return result;
    }

    this.postorderTraversal(currentNode.left, result);
    this.postorderTraversal(currentNode.right, result);
    result.push(currentNode.value);

    return result;
  }
}
