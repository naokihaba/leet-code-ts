function isPalindrome(originalX: number): boolean {
  if (originalX < 0) {
    return false
  }

  let x = originalX; // x は比較用に残す
  let reversedX = 0;

  while (x > 0) {
    // 121 % 10 = 1
    // 12 % 10 = 2
    // 1 % 10 = 1
    const lastDigit = x % 10; // 最終桁を取得

    // 0 * 10 = 0
    // 1 * 10 = 10
    // 12 * 10 = 120
    reversedX *= 10;

    // 0 + 1 = 1
    // 10 + 2 = 12
    // 120 + 1 = 121
    reversedX += lastDigit;

    // 121 / 10 = 12
    // 12 / 10 = 1
    // 1 / 10 = 0
    const numberWithoutLastDigit = Math.floor(x / 10);

    // 12
    // 1
    // 0
    x = numberWithoutLastDigit;
  }

  // 121 === 121
  return originalX === reversedX;
};

isPalindrome(121);
