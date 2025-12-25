/**
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * 二分木のrootが与えられたとき、ノードの値を中順走査（inorder traversal）で返す。
 *
 * 中順走査: 左部分木 → 現在のノード → 右部分木 の順で訪問
 *
 * @example
 * 入力: root = [1,null,2,3]
 *     1
 *      \
 *       2
 *      /
 *     3
 * 出力: [1,3,2]
 *
 * @example
 * 入力: root = []
 * 出力: []
 *
 * @example
 * 入力: root = [1]
 * 出力: [1]
 *
 * 制約:
 * - ノード数: 0 <= n <= 100
 * - -100 <= Node.val <= 100
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function inorderTraversal(root: TreeNode | null): number[] {
  // TODO(human): 中順走査を実装してください

  // val 現在のノードの値
  // left 左部分木
  // right 右部分木


  // 中順走査の処理フロー：
  //        1
  //       / \
  //      2   3
  //     / \
  //    4   5
  // 1. まず左部分木を全て処理（4 → 2 → 5）
  // 2. 次に現在のノード（1）
  // 3. 最後に右部分木（3）

  // 結果: [4, 2, 5, 1, 3]

  if (!root) return []

  // 現在の場所
  const stack: TreeNode[] = []
  const result: number[] = []

  let current: TreeNode | null = root

  let step = 1

  while (current || stack.length > 0) {
    console.log(`\n===== ステップ ${step} =====`)
    console.log(`current: ${current?.val ?? 'null'}`)
    console.log(`stack: [${stack.map(n => n.val).join(', ')}]`)

    while (current) {
      console.log(`  → ${current.val} をスタックにpush、左へ`)
      stack.push(current)
      current = current.left
    }
    console.log(`  左端に到達 (current = null)`)
    console.log(`  stack: [${stack.map(n => n.val).join(', ')}]`)

    // スタックから取り出して値を記録
    current = stack.pop()!
    console.log(`  ← ${current.val} をスタックからpop`)
    result.push(current.val)
    console.log(`  result に ${current.val} を追加 → [${result.join(', ')}]`)

    // 右へ移動
    console.log(`  右へ移動: ${current.right?.val ?? 'null'}`)
    current = current.right

    step++
  }

  return result

}

inorderTraversal(
  new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
)
