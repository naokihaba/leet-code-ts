/**
 * 35. Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 *
 * ソート済みの重複のない整数配列とターゲット値が与えられる。
 * ターゲットが見つかればそのインデックスを返す。
 * 見つからなければ、順序を保ってターゲットを挿入する位置のインデックスを返す。
 *
 * O(log n) の計算量で実装する必要がある。
 *
 * 例1:
 * 入力: nums = [1,3,5,6], target = 5
 * 出力: 2
 *
 * 例2:
 * 入力: nums = [1,3,5,6], target = 2
 * 出力: 1
 *
 * 例3:
 * 入力: nums = [1,3,5,6], target = 7
 * 出力: 4
 *
 * 制約:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums は昇順にソートされた重複のない値を含む
 * - -10^4 <= target <= 10^4
 *
 * @param nums - ソート済みの整数配列
 * @param target - 検索するターゲット値
 * @returns ターゲットのインデックス、または挿入位置
 */
function searchInsert(nums: number[], target: number): number {
  // O(n) - 線形時間：配列の長さに比例して処理時間が増える（findIndex・for など）
  // O(log n) - 対数時間：毎回半分に絞るので、処理回数が劇的に少ない。二部探索

  let left = 0
  let right = nums.length - 1

  /**
   * [1,3,5,6],5
   * 1回目
   * left = 0
   * right = 3
   * 
   * mid = (0 + 3) / 2 = 1
   * 
   * nums[mid] = 3, target = 5 
   * nums[mid] === target = false
   * nums[mid] < target = true
   * 右に移動させる
   * // 2
   * left = mid + 1
   * =================
   * 2回目
   * left = 2
   * right = 3
   * 
   * mid = (2 + 3) / 2 = 2
   * 
   * nums[mid] = 5, target = 5 
   * nums[mid] === target = true
   * 
   * end 2
   * 
   */
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // 二部探索なのでmidを基準にする
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
}
