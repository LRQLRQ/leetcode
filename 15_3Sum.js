/**
*@param {number[]} nums
*@return {number[][]}
*/
// var threeSum = function(nums) {
//     var ret = [];
//     var flag = 0;
//     for(var i=0; i<nums.length; i++){
//         for(var j=i+1; j<nums.length; j++){
//             for(var k=j+1; k<nums.length; k++){
//                 if(nums[i]+nums[j]+nums[k]===0){
//                     let temp = [];
//                     temp.push(nums[i]);
//                     temp.push(nums[j]);
//                     temp.push(nums[k]);
//                     temp.sort(asc_sort);
//                     for(let l=0; l<ret.length; l++){
//                         if(ret[l].toString()==temp.toString()){
//                             flag = 1;
//                             break;
//                         }
//                     }
//                     if(flag==1){
//                         flag = 0;
//                     } else{
//                         ret.push(temp);
//                     }
//                 }
//             }
//         }
//     }
//     return ret;
// }


var threeSum = function(nums){
    var nums_p = [];
    var nums_n = [];
    var ret = [];
    nums.sort(asc_sort);    //先对数组进行排序
    console.log("排序后的数组是:   "+nums);
    for(var i=0; i<nums.length; i++){   //分成两个数组，一正一负
        if(nums[i]<0)
            nums_n.push(nums[i]);
        else
            nums_p.push(nums[i]);
    }
    for(var i=0; i<nums_n.length; i++){
        for(var j=nums_p.length-1; j>=0; j--){
            let twoSum = nums_n[i]+nums_p[j];
            if(twoSum>0){
                let pos = nums_n.indexOf(-twoSum);
                if(pos!==-1 && pos>i){ // && pos>i
                    let temp = [nums_n[i],nums_n[pos],nums_p[j]];
                    ret.push(temp);
                }    
            } else{
                let pos = nums_p.indexOf(-twoSum);
                if(pos!==-1 && pos<j){ //&& pos<j
                    let temp = [nums_n[i],nums_p[pos],nums_p[j]];
                    ret.push(temp);
                }
            }
        }
    }
    console.log("正数数组是:   "+nums_p);
    console.log("负数数组是:   "+nums_n);
    console.log("返回结果是:   "+ret);
    return ret;
}


var asc_sort = function(a,b){
    return a-b;
}
var test = threeSum([-1, 0, 1, 2, -1, -4]);

// console.log(test);
