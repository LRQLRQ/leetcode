/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var sArray = s.split('');
    var step = s.length;
    var i = 0;
    var j = 1;
    var temp = [];
    var strLength = 0;
    var flag = 0;
    var ret = '';
    while(i<step){
        temp.push(sArray[i]);
        while(sArray[i]===sArray[i+1+flag]){
            flag++;
            temp.push(sArray[i+flag]);
        }
        while(i-j>=0 && sArray[i-j]===sArray[i+j+flag]){
            temp.push(sArray[i+j+flag]);
            temp.unshift(sArray[i-j]);
            j++;              
        }
        if(temp.length>=strLength){
            strLength = temp.length;
            ret = temp.join('');
            
        }
        temp = [];
        flag = 0;
        i++;
        j = 1;   
    }
    return ret;
};