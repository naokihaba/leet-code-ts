function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 始点 + 次点 === target
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }

  return []
};
