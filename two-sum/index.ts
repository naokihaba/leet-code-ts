// 整数配列 `nums` と整数 `target` が与えられたとき、その合計が `target` になる2つの数値のインデックスを返してください。
// [2,7,11,15]・target = 9 の場合 = 0,1
function twoSum(nums: number[], target: number): number[] {
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
  // キーと値のペアを保持し、キーが最初に挿入された順序を覚えてくれる
  const numMap: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    // 1回目： 9-2 = 7
    // 2回目： 9-7 = 2
    const result = target - nums[i];

    // Map(0) {}
    // Map(1) { 2 => 0 }
    console.log(numMap)

    if (numMap.has(result)) {
      console.log(numMap.get(result)!, i)
      // [0,1]
      return [numMap.get(result)!, i]
    }

    numMap.set(nums[i], i)
  }

  return []
};

// npx tsx {{file-path}}
twoSum([2, 7, 11, 15], 9)
