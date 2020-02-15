// 这个题是第一道写的一次通过的题
// 解题方法说是迭代法
// 还有一种递归

function ListNode(val) {
  this.val = val;
  this.next = next;
}

function mergeTwoList(l1, l2) {
  var preHead = new ListNode(0);
  var head = preHead;

  while(l1 && l2) {
    if(l1.val < l2.val) {
      preHead.next = l1;
      l1 = l1.next;
    } else {
      preHead.next = l2;
      l2 = l2.next;
    }
    preHead = preHead.next;
  }
  preHead.next = l1==null? l2: l1;
  return head;
}



