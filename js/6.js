
var convert = function(s, numRows) {
    var str = [];
    var inc = -1;
    var pos = 0;
    var ret = "";
    for( let i=0; i<numRows; i++) {
        str[i] = "";
    }
    
    for( let i=0; i<s.length; i++) {
        if(i % (numRows-1)===0) {
            inc = -1 * inc;
        }
        str[pos] = str[pos] + s[i];
        pos = pos + inc;
    }
    
    for(let i=0; i<numRows; i++) {
        ret = ret + str[i];
    }
    
    return ret;
}

var test = convert("PAYPALISHIRING", 4);
console.log(test);

