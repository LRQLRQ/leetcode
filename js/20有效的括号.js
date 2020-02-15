//没想到这题以前做过，以前写的好丑啊，跟着印象写下来
//1. 使用了栈，栈中只存储开括号，遇到开括号就入栈，遇到闭括号就出栈，看是否匹配
//2. 使用了map，来判断是否匹配
//3. 最后要看栈是否空了，不是空的话说明还有左括号未匹配

function isValid(s) {
  const map = new Map();
  const stack = [];
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");

  for(let i=0; i<s.length; i++) {
    if(!map.has(s[i])) {
      stack.push(s[i]);
    } else {
      if(map.get(s[i])!==stack.pop()) {
        return false;
      }
    }
  }
  return stack.length===0;
}

var test = isValid("{([])}");
console.log(test);
