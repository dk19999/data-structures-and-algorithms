/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  function dfs(root, level = 0) {
    if (!root) {
      return result;
    }

    let value = result[level] || [];
    result[level] = [...value, root.val];
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }

  dfs(root);

  return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderIteratively = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let result = [];

  while (queue.length) {
    const currentLevelNodes = [];

    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();

      currentLevelNodes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevelNodes);
  }

  return result;
};
