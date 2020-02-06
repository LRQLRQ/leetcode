
function MaxSubArrayLength(nums, target) {
  
  let maxLength = 0;
  for(let i=0;i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      let sum = 0;
      for(let k=i; k<=j; k++) {
        sum += nums[k];
      }
      if(sum === target) {
        maxLength = maxLength>j-i+1? maxLength: j-i+1;
        console.log("i:" + i + "  j:" + j);
      }
    }
  }
  return maxLength;
}


var nums1 = [1, -1, 5, -2, 3];
var target1 = 3;
var test = MaxSubArrayLength(nums1, target1);
console.log(test);
