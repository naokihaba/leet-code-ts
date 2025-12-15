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

function inorderTraversal(root: TreeNode | null): number[] {
// 入力: [1,null,2,3] のツリー
//     1
//      \
//       2
//      /
//     3
// recursive(1)
// ├─ 左: null → スキップ
// ├─ result.push(1) →[1]
// └─ 右へ: 2
// recursive(2)
//   ├─ 左へ: 3
// recursive(3)
//     ├─ 左: null → スキップ
//     ├─ result.push(3) →[1, 3]
//     └─ 右: null → スキップ
//   ├─ result.push(2) →[1, 3, 2]
//   └─ 右: null → スキップ
// 結果: [1, 3, 2]
  const result: number[] = [];
  function recursive(r: TreeNode | null) {
    if (!r) return null;
    if (r.left) {
      recursive(r.left);
    }
    result.push(r.val);
    if (r.right) {
      recursive(r.right);
    }
  }

  recursive(root);
  return result;
};

inorderTraversal(
  new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
)
