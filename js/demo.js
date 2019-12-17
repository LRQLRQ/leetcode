

function Find(target, array) {
    let len = array[0].length;
    let index = len/2;
    let step = len/2;
    if(target<array[0][0] || target > array[len-1][len-1]) return false;
    while(true) {
        step = step/2;
        if(array[index].indexOf(target)>0) {
            return true;
        } else {
            if(target > array[index][len-1])
                index += step;
            else
                index -= step;
        }
        if(step<1) return false;
    }
}


function Find(target, array)
{
    //因为递增的，即是有序的，所以可以使用二分查找，查找每一行的元素
    for(let i=0; i<array.length; i++) {
        let low = 0;
        let high = array[0].length-1;
        while(low <= high) {    //判断条件该写什么呢?
            let mid = parseInt((low+high)/2);
            if(target > array[i][mid]) {
                low = mid + 1;
            }
            else if(target < array[i][mid] ) {
                high = mid - 1;
            }
            else {
                return true;
            }
        }    
    }
    return false;
}

Find(7, [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);
