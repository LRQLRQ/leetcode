// 1. 巧妙的借助了无中生有的头结点，避免了删除头结点的情况(当n和链表长度相同时，这样处理很巧妙)
// 2. 还有first节点先走n+1步，此时second再走，当first走到结尾时，此时second正好在倒数第N+1个节点，重新指向倒数第N+1节点的next的指向，即可删去
// 就是第1点很巧妙，有点像高中学的放缩法，先放大，就可以避免掉边界值


function ListNode(val) {
  this.val = val;
  this.next = null;
}
function removeNthFromEnd = function(head, n) {
  var dummy = new ListNode(0);
  dummy.next = head;
  var first = dummy;
  var second = dummy;

  for(let i=0; i<n+1; i++) {
    first = first.next;
  }
  while(first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}


