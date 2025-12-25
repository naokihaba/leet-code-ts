/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 *
 * 83. ソート済みリストから重複を削除
 *
 * ソート済みの連結リストの先頭 head が与えられます。
 * 各要素が一度だけ出現するように、すべての重複を削除してください。
 * ソートされた状態のまま連結リストを返してください。
 *
 * 例1:
 * 入力: head = [1,1,2]
 * 出力: [1,2]
 *
 * 例2:
 * 入力: head = [1,1,2,3,3]
 * 出力: [1,2,3]
 *
 * 制約:
 * - リスト内のノード数は [0, 300] の範囲
 * - -100 <= Node.val <= 100
 * - リストは昇順にソートされていることが保証されている
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null


  // 現在の座標を格納
  let current = head

  // 次の値があれば進める
  while (current.next !== null) {
    // 重複している場合は次に飛ばす
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}


// [1,1,2] を表す連結リスト
console.log(deleteDuplicates(
  new ListNode(1, new ListNode(1, new ListNode(2)))
))
