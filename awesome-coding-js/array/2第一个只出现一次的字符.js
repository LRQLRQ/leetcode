
//时间复杂度O(n),空间复杂度O(n)
function FirstNotRepeatingChar(str) {
  if(!str || str.length===0) {
    return -1;
  }
  let strArr = str.split("");
  let length = strArr.length;
  const obj = {};
  for(let i=0; i<length; i++) {
    obj[strArr[i]] = obj[strArr[i]] ? obj[strArr[i]]+1 : 1;
  }
  for(let i=0; i<length; i++) {
    if(obj[strArr[i]]===1) {
      return i;
    }
  }
  return -1;
}

var ret = FirstNotRepeatingChar(str);
console.log(ret);

