/*
 * 【問題】
 * ローマ数字は7つの異なる記号で表されます: I, V, X, L, C, D, M
 *
 * 記号       値
 * I          1
 * V          5
 * X          10
 * L          50
 * C          100
 * D          500
 * M          1000
 *
 * 例えば、2は「II」と書きます（1が2つ足されたもの）。
 * 12は「XII」と書きます（X + II）。
 * 27は「XXVII」と書きます（XX + V + II）。
 *
 * ローマ数字は通常、左から右へ大きい順に書かれます。
 * ただし、4は「IIII」ではありません。代わりに「IV」と書きます。
 * 1が5の前にあるため、引き算をして4になります。
 * 同じ原則が9（IX）にも適用されます。
 *
 * 引き算が使われる6つのケース:
 * - I は V (5) と X (10) の前に置いて 4 と 9 を作る
 * - X は L (50) と C (100) の前に置いて 40 と 90 を作る
 * - C は D (500) と M (1000) の前に置いて 400 と 900 を作る
 *
 * 与えられたローマ数字を整数に変換してください。
 *
 * 【制約】
 * - 1 <= s.length <= 15
 * - s は文字 ('I', 'V', 'X', 'L', 'C', 'D', 'M') のみを含む
 * - s は範囲 [1, 3999] の有効なローマ数字であることが保証されている
 *
 * 【例1】
 * 入力: s = "III"
 * 出力: 3
 * 解説: III = 3
 *
 * 【例2】
 * 入力: s = "LVIII"
 * 出力: 58
 * 解説: L = 50, V = 5, III = 3
 *
 * 【例3】
 * 入力: s = "MCMXCIV"
 * 出力: 1994
 * 解説: M = 1000, CM = 900, XC = 90, IV = 4
 */

const romanValues: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(s: string): number {
  const n = s.length;

  let total = 0;
  let prevValue = 0;

  for (let i = n - 1; i >= 0; i--) {
    const value = romanValues[s[i]];

    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }

    prevValue = value;
  }

  return total;
}
