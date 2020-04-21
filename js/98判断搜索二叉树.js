/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 题目约束理解
// 1. 向右分支走，更新下届，因为要比根节点大
// 2. 向左分支走，更新上届，因为要比根节点小
// 3. 设置初值为正无穷和负无穷，或null， 针对只向左走和只向右走的分支，只向左走没有下届，只向右走没有上届

// 1. BFS解法，广度优先，使用队列
// var isValidBST = function(root) {
//   if(!root) {
//     return true;
//   }
//   const q = [
//     { node:root, upperBound: Number.MAX_SAFE_INTEGER, lowerBound: Number.MIN_SAFE_INTEGER }
//   ];
  
//   while(q.length) {
//     const { node: {val, left, right}, upperBound, lowerBound } = q.shift();
//     if(val >= upperBound || val <= lowerBound) {
//       return false;
//     }
//     let nextUpperBound = Math.min(val, upperBound);
//     let nextLowerBound = Math.max(val, lowerBound);
//     if(left) {
//       q.push({node: left, upperBound: nextUpperBound, lowerBound: lowerBound});
//     }
//     if(right) {
//       q.push({node: right, upperBound: upperBound, lowerBound: nextLowerBound});
//     }
//   }
//   return true;
// };

// 2. 递归解法
// var isValidBST = function(root) {  
//   function helper(root, min, max) {
//     if(!root) {
//       return true;
//     }
//     if(root.val <= min || root.val >= max) {
//       return false;
//     }
//     return helper(root.left, min, root.val) && helper(root.right, root.val, max);
//   }
  
//   return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// }

// 3. DFS深度优先解法
var isValidBST = function(root) {
  const stack = [];
  const lowers = [];
  const uppers = [];
  const update = function(node, lower, upper) {
    stack.push(node);
    lowers.push(lower);
    uppers.push(upper);
  }
  update(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  
  while(stack.length > 0) {
    let node = stack.pop();
    let lower = lowers.pop();
    let upper = uppers.pop();
    if(node==null) continue;
    let val = node.val;
    console.log(lowers, val, uppers);
    if(val<=lower || val >=upper) {
      return false;
    }
    update(node.left, lower, val);
    update(node.right, val, upper);
  }
  return true;
}