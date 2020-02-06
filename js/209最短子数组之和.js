//1. 两个指针走一遍，O(n)解法
//2. 学会 sum += nums[right++]这种写法
//3. 当right走到尽头时，随着left的减少，sum会越来越小，小与s时就终止
//4. 所以right实际上制约着left，即：当right走到尽头时，left只剩下最后几步路了,所以先写right的while循环，再写left的循环，直接结束。否则再次进来外层的while循环，还需要添加额外的条件
//5. 因为内层while的循环变量left、right实际上是上次的值。所以最小长度只需要 right-left就行了，不需要再+1，因为此时的right已经加了1
function MinSubArraySum(nums, s) {
  
  let left = 0;
  let right = 0;
  let minLength = nums.length + 1;
  let length = nums.length;
  let sum = 0;
  while(right<length) {

    while(sum<s && right<length) {
      sum += nums[right++];
    }
    while(sum>=s) {
      console.log("left is : "+left+"right is :"+right+"sum is :" + sum)
      minLength = minLength<right-left? minLength: right-left;
      sum -= nums[left++];
    } 
  }
  if(minLength===length+1) return 0;
  return minLength;
}

var nums1 = [2, 3, 1, 2, 4, 3];
var s1 = 7;
var test = MinSubArraySum(nums1, s1);
console.log(test);
