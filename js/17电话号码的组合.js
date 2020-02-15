//使用了回溯算法，回溯其实是一种穷举
//1. 设置好各个按键的映射表，即numsMap
//2. 写回溯函数，终止条件，即出口，是digits长度和当前的字符串长度相同，因为每个数字对于的按键出一个字母，当两者长度相同时，说明此次完成,则return终止此次循环
//3. 注意回溯中backtrace(temp+str[i], times+1)中，不能写times++，因为times++实际上传入的还是times本身，一直是0. 此外，不能在某次循环中操作temp，只能在传入下一次参数时修改传入的参数，否则此次循环结束后会污染下一次的结果.

function letterCombinations(digits) {
  const numsMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const ret = [];

  var backTrace = function(temp, times) {
    if(digits.length===times) {
      ret.push(temp);
      return ;
    } else {
      let str = numsMap[digits[times]];
      for(let i=0; i<str.length; i++) {
        backTrace(temp+str[i], times+1);
      }
    }
  }
  backTrace("", 0);
  return ret;
}

var test = letterCombinations("23");
console.log(test);

