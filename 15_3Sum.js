/**
*@param {number[]} nums
*@return {number[][]}
*/
var threeSum = function(nums) {
    var ret = [];
    var flag = 0;
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            for(var k=j+1; k<nums.length; k++){
                if(nums[i]+nums[j]+nums[k]===0){
                    let temp = [];
                    temp.push(nums[i]);
                    temp.push(nums[j]);
                    temp.push(nums[k]);
                    temp.sort(asc_sort);
                    for(let l=0; l<ret.length; l++){
                        if(ret[l].toString()==temp.toString()){
                            flag = 1;
                            break;
                        }
                    }
                    if(flag==1){
                        flag = 0;
                    } else{
                        ret.push(temp);
                    }
                }
            }
        }
    }
    return ret;
}

var asc_sort = function(a,b){
    return a-b;
}
var test = threeSum([-1, 0, 1, 2, -1, -4]);

console.log(test);
