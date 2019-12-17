
//从尾到头打印链表
function printListFromTailToHead(head) {
  let arr = [];
  while(head) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
}

function reverseList(head) {
  while(!head || head.next) {
    return head;
  }
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}
