/*
 * 【問題】
 * 整数の配列 nums と整数 target が与えられます。
 * 配列内の2つの数値を足し合わせて target になるような、
 * その2つの数値のインデックスを返してください。
 *
 * 【条件】
 * - 各入力には必ず1つの解が存在します
 * - 同じ要素を2回使用することはできません
 * - 答えはどの順序で返しても構いません
 *
 * 【制約】
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - 有効な解は必ず1つ存在する
 *
 * 【例1】
 * 入力: nums = [2,7,11,15], target = 9
 * 出力: [0,1]
 * 解説: nums[0] + nums[1] == 9 なので、[0, 1] を返す
 *
 * 【例2】
 * 入力: nums = [3,2,4], target = 6
 * 出力: [1,2]
 *
 * 【例3】
 * 入力: nums = [3,3], target = 6
 * 出力: [0,1]
 *
 * 【発展課題】
 * O(n^2) 未満の計算量で解けますか？
 */

function twoSum(nums: number[], target: number): number[] {
  // 0(1)に計算量を抑える
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // 9 - 2 = 7
    // 9 - 7 = 2
    const complement = target - nums[i];

    // map: { 2,0 }
    // return [0,1]
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
twoSum([2, 7, 11, 15], 9);
