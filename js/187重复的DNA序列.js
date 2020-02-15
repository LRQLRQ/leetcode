// 查找重复的序列，最暴力的解法是O(n2),以10个长度的字符串为一个单位，套两层for循环
// 1. 可以使用哈希表，将空间转换为时间，把每个长度为10的字符串都存到map里面，遇到重复的时候，就存到结果中。同时改变标志。写这里的时候想到了操作系统中的01信号量与加减信号量。我既可以设置出现过的str键值为0，也可以让它累加，根据设置的规则，判断条件不同罢了。

var findRepeatDNASequences = function(s) {
  const map = new Map();
  const ret = [];

  for(let i=0; i+10<=s.length; i++) {
    let str = s.slice(i, i+10);
    if(map.has(str)) {    // 如果表中已经有了该字符串
      if(map.get(str)!==-1) { //判断是不是第二次出现
        ret.push(str);
      }
      map.set(str, -1);   //第二次存到表中后，设置标志位为-1
    } else {              //第一次存到表中，设置标志位1
      map.set(str, 1);
    }
  }
  return ret;
}

var str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
var test = findRepeatDNASequences(str);
console.log(test);


