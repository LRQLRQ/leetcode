//for(var i=0;i<10;i++){
//console.log(Math.random());
//}
//
//
//var a = 1;
//console.log(a);
//a = a;
//console.log(a);

//for(var i=0;i<99;i++){
//    temp = Math.random()*100;
//    console.log(Math.round(temp));
//}

//var twoSum = function(numns, target){
//	for(var i=0; i<nums.length; i++){
//		for(var j=i+1; j<nums.length; j++){
//			if(nums[i]+nums[j]===target){
//				var ret = [i,j];
//				return ret;
//			}
//		}
//	}
//}
//var nums = [2,7,11,15];
//var target = 9;
//var result = twoSum(nums,target);
//console.log(result);

function ListNode(val){
	this.val = val;
	this.next = null;
}


var longestPalindrome = function(s) {
    var sArray = s.split('');   //将传入的字符串分解为数组
    var step = s.length;        //计算出数组长度，共循环这么多次
    var i = 0;                  //总循环的计数变量
    var j = 1;                  //
    var temp = [];              //暂存窗口
    var strLength = 0;          //最长的子集长度
    var repeat_flag = 0;        //重复的变量长度
    var ret = '';               //返回值
    while(i<step){  
        temp.push(sArray[i]);   //先把当前值推进缓冲区
        while(sArray[i]===sArray[i+1+repeat_flag]){     //如果当前位置的后面有重复的值，则记下重复的次数，将其都推进缓冲区
            repeat_flag++;
            temp.push(sArray[i+repeat_flag]);
        }

        while(i-j>=0 && sArray[i-j]===sArray[i+j+repeat_flag]){     //出现不同字符的回文时，给缓冲区头尾都添加重复的字符
            temp.push(sArray[i+j+repeat_flag]);
            temp.unshift(sArray[i-j]);
            j++;              
        }
        if(temp.length>=strLength){             //记录下历史的长度，
            strLength = temp.length;            
            ret = temp.join('');                //将缓冲区的数组拼接起来
        }
        temp = [];                              //缓冲区清空，为下一次做准备
        repeat_flag = 0;                        //重复的次数清空
        i++;
        j = 1;   
    }
    return ret;
};


var lrq = {};
lrq.name = "刘瑞卿";
console.log(lrq.name);



