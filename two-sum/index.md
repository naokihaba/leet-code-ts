## 1. Two Sum

整数配列 `nums` と整数 `target` が与えられたとき、その合計が `target` になる2つの数値のインデックスを返してください。

各入力に対して必ず1つの解が存在し、同じ要素を2回以上使用することはできないものとします。

答えは任意の順序で返すことができます。

```ts
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 始点 + 次点 === target
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
};
```

### Mapを使用した解法

```ts
function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(nums[i], i);
  }
  return [];
};
```
