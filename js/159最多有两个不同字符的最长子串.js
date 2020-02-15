

function Max2SubString(s) {
  const map = new Map();
  let left = 0;
  let right = 0;
  let maxLength = 0;
  for(let i=0; i<s.length; i++) {
    let cur = s[i];
    if(map.has(cur)) {
      map.set(cur, map.get(cur)+1);
    } else {
      map.set(cur, 1);  //初始化为1
    }
    
    while(map.size>2 && left<=i) {
      let leftStr = s[left++];
      map.set(leftStr, map.get(leftStr)-1);
      if(map.get(leftStr)===0) {
        map.delete(leftStr);
      }
    }
    maxLength = maxLength>i-left+1? maxLength: i-left+1;
  }
  return maxLength;

}

var s1 = "eceba";
var test = Max2SubString(s1);
var s2 = "ccaabbb";
var test2 = Max2SubString(s2);
console.log(test);
console.log(test2);
