/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1841241079
 *
 * 昇順にソートされた整数配列 nums から重複を in-place で削除し、
 * 各ユニークな要素が1回だけ出現するようにする。
 * 要素の相対的な順序は維持すること。
 *
 * ユニークな要素の数 k を返す。
 * nums の最初の k 個の要素にはユニークな数値がソートされた順序で含まれる必要がある。
 *
 * 例1:
 * 入力: nums = [1,1,2]
 * 出力: 2, nums = [1,2,_]
 *
 * 例2:
 * 入力: nums = [0,0,1,1,1,2,2,3,3,4]
 * 出力: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 * 制約:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums は昇順にソートされている
 *
 * @param nums - ソート済み整数配列
 * @returns k - ユニークな要素の数
 */
function removeDuplicates(nums: number[]): number {
  // nums があるかどうかを確認する
  if (!nums.length){
    return 0
  }

  let uniqueCount = 0;

  for (let j = 1; j <nums.length; j++){

    /**
     * [1,1,2]
     * 1回目： 1 !== 1 // false
     * 2回目： 2 !== 1 // true
     */
    if (nums[j] !== nums[uniqueCount]){
      uniqueCount++
      nums[uniqueCount] = nums[j]
    }
  }

  uniqueCount++

  return uniqueCount
};
