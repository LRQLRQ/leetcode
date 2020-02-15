// 因为题目要求时间复杂度为O(log n),所以必定是使用二分
// 1. 分情况，每次二分之后，断点可能在左侧，也可能在右侧，断点的另一侧是有序的
// 2. 此时，看target落在哪个区间，再分情况讨论，如果是落在不连续的区间，不连续区间在左侧还是在右侧，会影响下一个区间的赋值，此时需要再次分情况讨论
// 3. 一共分2x2=4 个条件，就能包含所有情况
// 此外， 题解有一种方法，先用二分找到旋转点，再一次二分查找解

var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low+high)/2);

  while(low<=high) {
    if(nums[mid]===target) {
      return mid;
    }
    if(nums[low]<=nums[mid]) {
      if(target>= nums[low] && target<=nums[mid]) {
        high = mid;
      } else {
        low = mid+1;
      }
    } else {
      if(target>=nums[mid] && target<=nums[high]) {
        low = mid+1;
      } else {
        high = mid;
      }
    }
    mid = Math.floor((low+high)/2);
  }
  return -1;
}

var test = search([4,5,6,7,0,1,2], 0);
console.log(test);
