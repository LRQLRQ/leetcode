
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists, stack=[], flag=true) {  //lists是链表数组， stack是一个和链表数组等长的数组， flag代表是否是初始化
  var head = null;

  if(flag) {  //如果初始化标志位true，将stack内的值全都变为null
      flag = false; //取消标志位
      stack[lists.length] = null;
      stack.fill(null);
  }
  for(let i=0; i<lists.length; i++) {   //对链表数组进行操作，将当前链表数组某条链表的最小值放到stack中的相应位置上
      if(lists[i] && stack[i]==null) {  //1.该链表不能为空， 2.存储栈为空 =》向栈中放值
          stack[i] = lists[i].val;    //放值
      }
  }
  //此时，stack中是所有链表头部的值，得到最小值的索引

  var index = getMinIndexArr(stack);  //获得最小值的索引
  if(index==null) { //如果返回的索引是null，说明全都为空了，直接返回即可
      return head;
  }
  head = lists[index];    //最小值的那个节点
  lists[index] = lists[index].next; //更新数组链表取出值的那条链表的头结点
  head.next = mergeKLists(lists, stack);  //递归下去
  return head;
};


//这个函数的作用是：
// 1. 返回输入数组内最小值的索引
// 2. 将最小值的位置变为null
// 3. 因为传参数组是引用的地址，所以传入stack中的值也会改变
// 4. 如果值全都是null，则直接返回null
function getMinIndexArr(arr) {
  let min = Infinity;
  let index = null;
  for(let i=0; i<arr.length; i++) {
      if(arr[i]==null) {
          continue;
      }
      if(min>arr[i]) {
          min = arr[i];
          index = i;
      }
  }
  if(index!==null) {
      arr[index] = null;
  }
  return index;
}


//终于作出一道hard的题，感觉真是。。超过了5%的人。。。
//无语凝噎