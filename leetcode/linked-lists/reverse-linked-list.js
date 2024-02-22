/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let prev = null;
  let currentHead = head;

  while (currentHead.next) {
    let nextHead = currentHead.next;
    currentHead.next = prev;
    prev = currentHead;
    currentHead = nextHead;
  }

  currentHead.next = prev;

  return currentHead;
};
