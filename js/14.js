/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var ret = '';
    if(strs.length<=0 || strs[0]==''){
        return ret;
    }
    if(strs.length==1){
        ret = strs[0].slice(0,1);
        return ret;
    }    
    for(var i=0;i<strs[0].length;i++){      //循环第一个字母长度次数
        var temp = strs[0].slice(i,i+1);        
        for(var j=0;j<strs.length;j++){            
            if(temp==strs[j].slice(i,i+1)){
                continue;           
            } else{
                return ret;
            }
        }
        ret = ret + temp; 
    }
    return ret;
};