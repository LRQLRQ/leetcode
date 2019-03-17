







var findMedianSortedArrays1 = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;	//计算出总共的长度
    let mid = Math.floor(totalLength/2) + 1;			//算出中位数所在的位置，进行这么多次数
    let last = null, preLast = null;					//用两个变量作为缓冲，用于应对奇数偶数长度
    while (mid--) {		
        preLast = last;			//保存上次的值
        last = ((nums2.length === 0 || nums1[0] < nums2[0]) ? nums1 : nums2).shift();	//从两个数组头开始计算，把小的数字弹出去
    }
    console.log(totalLength % 2 ? last : (last + preLast)/2 );
    return totalLength % 2 ? last : (last + preLast)/2 		//如果有奇数个数字，则返回当前的值；如果有偶数个数字，则返回当前与上次值的均值
};

