// 1. 使用双指针，头指针从前向后扫，尾指针从后向前扫，头指针遇到偶数且尾指针遇到奇数，则交换
// 2. 交换用到了ES6的解构用法，这种交换效率更高
// 在vim中左移代码块，使用v选中相应的代码，然后按< 或者 >
function reOrderArray(array) {
  let left = 0;
  let right = array.length - 1;
  while(left<right) {
    while(array[left]%2===1) {
      left++;
    }
    while(array[right]%2===0) {
      right--;
    }
    if(left<right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
    
  }
  return array;
}

function reOrderArray2(array) {
  const odd = [];
  const even = [];
  for(let i=0; i<array.length; i++) {
    if(array[i]%2===1) {
      odd.push(array[i]);
    } else {
      even.push(array[i]);
    }
  }
  return odd.concat(even);
}

var arr = [1,2,3,4,5,6,7,8];
var test = reOrderArray2(arr);
console.log(test);

