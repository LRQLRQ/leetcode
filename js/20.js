
var isValid = function(s) {
    var map = new Map();
    var set = new Set([')',']','}']);
    map.set(')','(');
    map.set(']','[');
    map.set('}','{');

    var temp;
    var strTemp=[];
    var str = s.split('');
    while(str.length){
        temp = str.shift();
        if(set.has(temp)){
            let tempLeft = strTemp.pop();
            if(tempLeft===map.get(temp))
                continue;
            else
                return false;
        } else{
            strTemp.push(temp);
        }
    }
    return strTemp.length===0?true:false;
} 

var test  = isValid('()[]{}');
var test2 = isValid('(]');
var test3 = isValid('{[]}');

console.log("1真:"+test+"  2错:"+test2+"  3真:"+test3);

