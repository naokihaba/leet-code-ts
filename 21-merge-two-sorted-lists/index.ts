/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 
 * 2つのソート済みリンクリスト list1 と list2 のヘッドが与えられます。
 * これら2つのリストを1つのソート済みリストにマージしてください。
 * このリストは、最初の2つのリストのノードを連結して作成する必要があります。
 * マージされたリンクリストのヘッドを返してください。
 * 
 * 単方向連結リスト（Singly Linked List）
 * 各ノードがデータと次のノードへの参照（ポインタ）を持つデータ構造。
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // list1: [1,2,4], list2: [1,3,4]
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !==null) {
    /**
     * List 1 を A List 2 を B とする
     * 1回目のループ: A：1, B:1 → Bをcurrentにセット
     * current: 0 -> 1
     * A: [1,2,4], B: [3,4]
     * 
     * 2回目のループ: A：1, B:3 → Aをcurrentにセット
     * current: 0 -> 1 -> 1
     * A: [2,4], B: [3,4]
     * 
     * 3回目のループ: A：2, B:3 → Aをcurrentにセット
     * current: 0 -> 1 -> 1 -> 2
     * A: [4], B: [3,4]
     * 
     * 4回目のループ: A：4, B:3 → Bをcurrentにセット
     * current: 0 -> 1 -> 1 -> 2 -> 3
     * A: [4], B: [4]
     * 
     * 5回目のループ: A：4, B:4 → Bをcurrentにセット
     * current: 0 -> 1 -> 1 -> 2 -> 3 -> 4
     * A: [4], B: []
     * 
     * ループ終了後、Aに要素が残っているので、currentにセット
     * current: 0 -> 1 -> 1 -> 2 -> 3 -> 4 -> 4
     */
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
};
