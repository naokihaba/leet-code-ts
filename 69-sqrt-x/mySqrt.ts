/**
 * 69. 平方根 (x)
 *
 * 非負整数 x が与えられます。x の平方根を計算し、
 * 最も近い整数に切り捨てて返してください。
 * 返される整数も非負である必要があります。
 *
 * 組み込みの指数関数や演算子を使用してはいけません。
 * 例えば、C++の pow(x, 0.5) や Python の x ** 0.5 を使用しないでください。
 *
 * 例1:
 * 入力: x = 4
 * 出力: 2
 * 説明: 4 の平方根は 2 なので、2 を返します。
 *
 * 例2:
 * 入力: x = 8
 * 出力: 2
 * 説明: 8 の平方根は 2.82842... であり、
 *       最も近い整数に切り捨てると 2 になります。
 *
 * 制約:
 * - 0 <= x <= 2^31 - 1
 */
export function mySqrt(x: number): number {

  let left = 0
  let right = x

  /**
   * x = 4 の場合
   * 1回目
   * left = 0
   * right = 4
   * mid = 2
   * left = 2 + 1
   * ===============
   * 2回目
   * left = 3
   * mid = (3+4)/2 = 3
   * right = 3 - 1
   * ===============
   * 3回目
   * 3 <= 2
   * End
   */
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
}

mySqrt(4);
// mySqrt(8);
