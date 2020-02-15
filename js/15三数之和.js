//1. 先对数组进行排序，用快排，时间复杂度 O(nlogn)
//2. for循环遍历数组，设置两个指针，i+1为左指针，nums.length-1为右指针
//3. 判断i left right三个位置的值和是否为0，为0则满足条件，小于0则增大left的值，大于0则减小right的值
//4. 最难的去重部分，对于i，数组中上一个值仍然是旧值，则跳过，因为已经找过解。
//4. 对于 left和right部分，判断下一个值是否相同，相同则跳过。
//5. 当nums[i]大于0时候，右边的值都大于0了，不可能满足条件，终止循环。

function threeSum(nums) {
  const ret = [];
  nums.sort((a, b)=> a-b);  //这里有个坑，必须输入函数才能进行升序排列，否则负数部分是降序“是按照字符顺序排列的”
  for(let i=0; i<nums.length; i++) {
    let left = i+1;   //设置左右指针的初始值
    let right = nums.length - 1;
    if(i>0 && nums[i]===nums[i-1]) continue;  //重复则去重
    if(nums[i]>0) break;

    while(left<right) {
      let sum = nums[i] + nums[left] + nums[right];
      if(sum===0) {
        ret.push([nums[i], nums[left], nums[right]]); //满足条件的值，记录下来
        while(left<right && nums[left]===nums[left+1]) {  //左指针的去重
          left++;
        };
        while(left<right && nums[right]===nums[right-1]){
          right--;
        };
        left++;
        right--;
      } else if(sum<0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ret;
}
var nums = [-1, 0, 1, 2, -1, -4];
var nums2 = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
var test = threeSum(nums2);
console.log(test);
