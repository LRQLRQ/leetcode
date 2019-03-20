/**
 * @param {number[]} height
 * @return {number}
 */

//水桶里面水最多，我只想到暴力解法,全部遍历一下时间复杂度O(2),我的运行时间是744ms
var maxArea = function(height) {
    
    var max = 0;
    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length; j++){
            let leng = height[i]>height[j]? height[j]:height[i];
            let width = j-i;
            let temp = leng * width;
            max = max>temp? max:temp;
        }
    }
    return max;
};

//给的标准解法时间复杂度O(1),从两头开始向中间靠拢，哪个值小哪个就移动,这个解法运行时间是60ms
var maxArea = function(height) {
    var max = 0;
    var pos_left = 0;
    var pos_right = height.length-1;
    
    for(let i=0;i<height.length-1;i++){
        let high = height[pos_left]<height[pos_right]?height[pos_left]:height[pos_right];
        let temp = high * (pos_right - pos_left);
        max = max>temp? max:temp;
        if(height[pos_left] < height[pos_right]){
            pos_left++;
        } else{
            pos_right--;
        }
    }
    return max;
};