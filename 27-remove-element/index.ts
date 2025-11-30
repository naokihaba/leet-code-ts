/**
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element/
 *
 * 整数配列 nums と整数 val が与えられる。
 * nums 内の val と等しい要素をすべて in-place で削除する。
 * 要素の順序は変更しても良い。
 * val と等しくない要素の数を返す。
 *
 * val と等しくない要素の数を k とすると：
 * - nums の最初の k 個の要素には val と等しくない要素が含まれる必要がある
 * - nums の残りの要素や nums のサイズは重要ではない
 * - k を返す
 *
 * 例1:
 * 入力: nums = [3,2,2,3], val = 3
 * 出力: 2, nums = [2,2,_,_]
 * 説明: 関数は k = 2 を返し、nums の最初の2要素は2になる
 *
 * 例2:
 * 入力: nums = [0,1,2,2,3,0,4,2], val = 2
 * 出力: 5, nums = [0,1,4,0,3,_,_,_]
 * 説明: 関数は k = 5 を返し、nums の最初の5要素は 0, 1, 4, 0, 3 になる
 *       (順序は異なっても良い)
 *
 * 制約:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 *
 * @param nums - 整数配列
 * @param val - 削除する値
 * @returns k - val と等しくない要素の数
 */
function removeElement(nums: number[], val: number): number {
  // val を固定してループで１列ずつ見ていく
  // 一致しないものがあればインクリメントして値を詰める
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // nums[i]とvalが一致しない場合、nums[k]に値を入れてkをインクリメント
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};


/**
 * i = 0 nums[0]=3 は val(3)と等しい => SKIP
 * i = 1 nums[1]=2 は val(3)と等しくない => nums[0]=2,k=1
 * i = 2 nums[2]=2 は val(3)と等しくない => nums[1]=2,k=2
 * i = 3 nums[3]=3 は val(3)と等しい => SKIP
 */
removeElement(
  [3, 2, 2, 3],
  3
)
