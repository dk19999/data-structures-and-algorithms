/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let prev;
  let totalNodes = 0;
  let current = head;

  while (current) {
    current = current.next;
    totalNodes++;
  }

  if (totalNodes === n) {
    head = head.next;
    return head;
  }

  current = head;
  let currentIndex = 0;
  while (current) {
    if (totalNodes - currentIndex === n) {
      if (prev) prev.next = current.next;
    }

    prev = current;
    current = current.next;
    currentIndex++;
  }

  return head;
};
