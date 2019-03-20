/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // x = x.toString().split('').reverse().join('');
    var temp = x;
    if(x<0){
        return false;
    }
    
    x = x.toString().split('').reverse().join('');
    if(temp == x)
        return true;
    else
        return false;
    
};