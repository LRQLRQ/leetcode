
function printMinNumber(nums) {
  if(!nums || nums.length===0) {
    return "";
  }
  return nums.sort(compareFun).join("");
}

function compareFun(a, b) {
  let before = "" + a + b;
  let after = "" + b + a;
  return before - after;
}

var testArr = [3, 32, 321];
var ret = printMinNumber(testArr);
console.log(ret);
