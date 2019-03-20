
var lengthOfLongestSubstring = function(s) {
    var sArray = s.split('');   //将所给的字符串分成数组
    var sTemp = [];             //缓存移动窗口
    var count = 0;              //返回的数字
    var tail;                   //每次循环数组队尾的字母   
    while(sArray.length>0){     //当字符串数组有值时进行循环
        tail = sArray.pop();     //取出sArray末尾的元素
        for(let i=0;i<sTemp.length;i++){    //取出字符串尾的元素与缓存窗口进行比较
            if(sTemp[i]===tail){            //如果字符重复则进行操作
                count = count>sTemp.length?count:sTemp.length;  //将历史中最大的count与窗口缓存的数组长度进行比较，取其大者
                for(let j=0;j<i+1;j++){     
                    sTemp.shift();          //将重复字符以前的字符弹出数组
                }
            }
        }
        sTemp.push(tail);                   //缓存移动窗口推入末尾的元素
    }
    count = count>sTemp.length?count:sTemp.length;  //有时传入的字符串本身就是最大的字符串，没有进入循环中的判断，因此最后还要进行赋值
    console.log(count);
    return count;
};