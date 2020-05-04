/**
 * @param {string} s
 * @return {number}
 */

// 1. dp 动态规划
// dp数组的意义是当前index为止，最大的有效括号长度是多少。
// 主要是写出方程，当遇到第i位是 ')'时，触发条件，此时又分为两种：
// a. i-1位置是 '(',此种情况很简单， dp[i] = dp[i-2] + 2
// b. i-1位置是 ')',此种情况就比较复杂，要再往前追溯一下，看 s[i - dp[i-1] - 1],这个位置是不是 '('
// 用语言描述就是，从当前开始向前数，当前有效括号长度走过之后再走一步，那个位置是不是 '(',和当前的')'匹配
// 匹配上的话，动态方程 dp[i] = dp[i-1] + dp[i - dp[i-1] - 2] + 2, 当前的最大值是 dp[i-1], 
// dp[i-dp[i-1]-2] 这个值代表与当前的')' 匹配的 '('再前一个位置的最大有效长度，是可以累积起来的，
// 最后再加上2，即这此累积的长度
var longestValidParentheses = function(s) {
  let dp = new Array(s.length);
  dp.fill(0);
  
  for(let i=1; i<s.length; i++) {
    if(s[i] === ')' ) {
      if(s[i-1] === '(' ) {
        dp[i] = (i-2>=0 ? dp[i-2] : 0) +2;
      } else if(s[i-1] === ')' && i-dp[i-1]-1>=0 && s[i-dp[i-1]-1]==='(') {
        dp[i] = dp[i-1] + (i-dp[i-1]-2>=0? dp[i-dp[i-1]-2] : 0) + 2;
      }
    }
  }
  let max = 0;
  for(let i=0; i<dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 2. 栈的方法
// 定义一个栈，初始只有一个值，-1 ,（为第一个遇到的')' 做准备）
// 遇到 '('就入栈, 要注意入栈的值是当前'('在字符串中的位置坐标index
// 遇到 ')'就pop出一个值，相当于对对碰抵消掉一对儿，然后接着走
// 假如栈中没有 '('的index了，就放 当前')'的位置信息吧，
// 反正下一轮也会直接把这个 ')'直接pop出去，刚刚入栈的 ')'就相当于是一个垃圾信息，
// 因为之前已经没有 '('可以和它配对儿了

var longestValidParentheses2 = function(s) {
  let stack = [-1];
  let max = 0;
  
  for(let i=0; i<s.length; i++) {
    if(s[i] === '(') {
      stack.push(i);  //把index放进去
    } else {
      stack.pop();
      if(!stack.length) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
}

// 3. 好巧妙的一个方法
// 从左向右走一遍，当 '(' 的个数和 ')' 的个数相等时， 且中间没有过 ')'的个数大于 '('的情况时
// 此时就是一个有效长度，累积比较最大的值
// 但是对这种情况 '((())' 得到的结果是0， 找不到最大的值
// 可以再从右向左走一遍，就能得到最大值了
var longestValidParentheses3 = function(s) {

  let left = 0;
  let right = 0;
  let max = 0;
  for(let i=0; i<s.length; i++) {
    if(s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if(left === right) {
      max = Math.max(max, left*2);
    }
    if(right > left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for(let i=s.length-1; i>=0; i--) {
    if(s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if(left === right) {
      max = Math.max(max, left*2);
    }
    if(left > right) {
      left = right = 0;
    }
  }
  return max;
}