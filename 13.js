/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num_IV = s.split('IV').length-1;    //-1
    var num_IX = s.split('IX').length-1;    //-1    
    var num_XL = s.split('XL').length-1;    //-10
    var num_XC = s.split('XC').length-1;    //-10
    var num_CD = s.split('CD').length-1;    //-100
    var num_CM = s.split('CM').length-1;    //-100
    var num_I = s.split('I').length-1;
    var num_V = s.split('V').length-1;
    var num_X = s.split('X').length-1;
    var num_L = s.split('L').length-1;
    var num_C = s.split('C').length-1;
    var num_D = s.split('D').length-1;
    var num_M = s.split('M').length-1;
    var result = 0;

    result = num_I + num_V*5 + num_X*10 + num_L*50 + num_C*100 + num_D*500 + num_M*1000 
    - num_IV*2 - num_IX*2 - num_XL*20 - num_XC*20 - num_CD*200 - num_CM*200;
    
    return result;
    
};